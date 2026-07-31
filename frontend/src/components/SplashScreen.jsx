import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { homeContent } from "../content"

const BOOT_LINES = [
  "booting sapeksh_os v1.0...",
  "loading modules... [ok]",
  "mounting filesystem... [ok]",
  "starting ui renderer... [ok]",
  "",
  `> ${homeContent.name}`,
  `> ${homeContent.role.split("|")[0].trim()}`,
]

const TYPE_SPEED_MS = 18
const LINE_PAUSE_MS = 200
const FINISH_DELAY_MS = 500

/**
 * One-time terminal boot animation, shown once per browser session.
 * Types out BOOT_LINES character-by-character; click/keypress skips it.
 */
export function SplashScreen({ onComplete }) {
  const [completedLines, setCompletedLines] = useState([])
  const [currentText, setCurrentText] = useState("")
  const lineIndexRef = useRef(0)
  const charIndexRef = useRef(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete()
      return
    }

    let timeoutId

    const tick = () => {
      const line = BOOT_LINES[lineIndexRef.current]
      if (charIndexRef.current < line.length) {
        charIndexRef.current += 1
        setCurrentText(line.slice(0, charIndexRef.current))
        timeoutId = setTimeout(tick, TYPE_SPEED_MS)
        return
      }

      setCompletedLines((prev) => [...prev, line])
      setCurrentText("")
      lineIndexRef.current += 1
      charIndexRef.current = 0

      if (lineIndexRef.current < BOOT_LINES.length) {
        timeoutId = setTimeout(tick, LINE_PAUSE_MS)
      } else {
        timeoutId = setTimeout(onComplete, FINISH_DELAY_MS)
      }
    }

    timeoutId = setTimeout(tick, TYPE_SPEED_MS)

    const skip = () => {
      clearTimeout(timeoutId)
      onComplete()
    }
    window.addEventListener("keydown", skip)
    window.addEventListener("click", skip)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("keydown", skip)
      window.removeEventListener("click", skip)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 bg-background flex items-center justify-center p-6"
    >
      <div className="w-full max-w-lg font-mono text-sm sm:text-base space-y-1">
        {completedLines.map((line, i) => (
          <div
            key={i}
            className={line.startsWith(">") ? "text-primary uppercase tracking-wide" : "text-muted-foreground"}
          >
            {line || " "}
          </div>
        ))}
        <div className={currentText.startsWith(">") ? "text-primary uppercase tracking-wide" : "text-muted-foreground"}>
          {currentText}
          <span className="inline-block w-2 h-4 sm:h-5 bg-primary ml-1 animate-blink align-middle" aria-hidden="true" />
        </div>
      </div>
    </motion.div>
  )
}

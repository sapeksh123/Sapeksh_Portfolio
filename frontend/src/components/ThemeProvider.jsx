import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ThemeContext, THEME_COLORS, THEME_STORAGE_KEY } from "./theme-context"

function readInitialTheme() {
  // index.html applies the stored theme before paint; the <html> class is the source of truth.
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark") ? "dark" : "light"
  }
  return "dark"
}

/**
 * Light/dark theme state. Dark is the default; the choice is remembered in localStorage["theme"].
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme)
  const transitionTimer = useRef()

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
    root.style.colorScheme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme])
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // storage unavailable — the theme just won't persist
    }
  }, [theme])

  useEffect(() => () => clearTimeout(transitionTimer.current), [])

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    root.classList.add("theme-transition")
    clearTimeout(transitionTimer.current)
    transitionTimer.current = setTimeout(() => root.classList.remove("theme-transition"), 300)
    setTheme((t) => (t === "dark" ? "light" : "dark"))
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { Download, Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { homeContent } from "../content"
import { cn } from "../lib/utils"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Education", path: "/education" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close the menu whenever the route changes (state adjusted during render, not in an effect).
  const [lastPath, setLastPath] = useState(location.pathname)
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // While the mobile menu is open: lock body scroll, close on Escape, close if resized to desktop.
  useEffect(() => {
    if (!isOpen) return
    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"
    const onKey = (e) => e.key === "Escape" && setIsOpen(false)
    const desktop = window.matchMedia("(min-width: 1024px)")
    const onResize = () => desktop.matches && setIsOpen(false)
    window.addEventListener("keydown", onKey)
    desktop.addEventListener("change", onResize)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener("keydown", onKey)
      desktop.removeEventListener("change", onResize)
    }
  }, [isOpen])

  const solid = scrolled || isOpen

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        isOpen
          ? "border-border bg-background"
          : solid
            ? "border-border bg-background/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
      )}
      aria-label="Main"
    >
      <div className="container max-w-6xl">
        <div className="flex h-14 items-center justify-between gap-2 sm:h-16">
          <Link
            to="/"
            className="-ml-1 flex min-h-[44px] min-w-[44px] items-center justify-center p-1"
            aria-label="Sapeksh Vishwakarma — home"
          >
            <img src="/images/logoSV.png" alt="" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
          </Link>

          <div className="hidden items-center lg:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative flex h-11 items-center px-3 font-mono text-xs uppercase tracking-wide transition-colors xl:text-sm",
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 bg-primary" aria-hidden="true" />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="-mr-1 flex items-center gap-1 lg:mr-0">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center border border-transparent text-foreground transition-colors hover:border-border hover:bg-muted lg:hidden"
              onClick={() => setIsOpen((o) => !o)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop: tapping outside the panel closes the menu */}
            <motion.div
              key="backdrop"
              className="fixed inset-x-0 bottom-0 top-14 bg-background/70 backdrop-blur-sm sm:top-16 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="panel"
              id="mobile-nav-menu"
              className="fixed inset-x-0 top-14 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-border bg-background shadow-lg sm:top-16 sm:max-h-[calc(100dvh-4rem)] lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="container max-w-6xl py-3">
                <ul className="divide-y divide-border">
                  {navItems.map((item, i) => {
                    const active = location.pathname === item.path
                    return (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex min-h-[48px] items-center gap-4 px-2 font-mono text-sm uppercase tracking-wide transition-colors",
                            active ? "text-primary" : "text-foreground hover:text-primary"
                          )}
                        >
                          <span className="w-6 text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                          <span className="flex-1">{item.name}</span>
                          {active && <span className="h-1.5 w-1.5 bg-primary" aria-hidden="true" />}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                <a
                  href={homeContent.cvUrl}
                  download
                  className="mt-3 mb-1 flex min-h-[48px] items-center justify-center gap-2 bg-primary font-mono text-sm uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

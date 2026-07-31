import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img
                            src="/images/logoSV.png"
                            alt="Sapeksh Vishwakarma"
                            className="h-9 w-9 sm:h-10 sm:w-10 object-contain"
                        />
                    </Link>

                    {/* Enhanced Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={cn(
                                    "px-4 py-2 font-mono text-sm uppercase tracking-wide transition-colors relative",
                                    location.pathname === item.path
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {item.name}
                                {location.pathname === item.path && (
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu */}
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden min-w-[44px] min-h-[44px]"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-nav-menu"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Enhanced Mobile Navigation */}
                {isOpen && (
                    <div id="mobile-nav-menu" className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md mt-2 border border-border">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={cn(
                                        "flex items-center px-4 py-3 font-mono uppercase tracking-wide text-sm transition-colors min-h-[44px] relative",
                                        location.pathname === item.path
                                            ? "text-primary bg-primary/10 border-l-2 border-primary"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
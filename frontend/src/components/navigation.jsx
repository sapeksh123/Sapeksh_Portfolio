import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Code2, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { ThemeToggle } from "./theme-toggle"
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
                    ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    {/* Enhanced Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="p-2 rounded-xl bg-gradient-to-r from-primary to-blue-500 text-white group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                            <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">SV</span>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Sparkles className="h-3 w-3 text-primary" />
                        </div>
                    </Link>

                    {/* Enhanced Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={cn(
                                    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative hover:bg-primary/10 hover:shadow-lg group",
                                    location.pathname === item.path
                                        ? "text-primary bg-gradient-to-r from-primary/10 to-blue-500/10 shadow-lg border border-primary/20"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {item.name}
                                {location.pathname === item.path && (
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full" />
                                )}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle & Mobile Menu */}
                    <div className="flex items-center space-x-2">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden min-w-[44px] min-h-[44px]"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Enhanced Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-xl mt-2 border border-primary/20 shadow-xl">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={cn(
                                        "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 min-h-[44px] flex items-center relative group",
                                        location.pathname === item.path
                                            ? "text-primary bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 shadow-lg"
                                            : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                                    )}
                                >
                                    {item.name}
                                    {location.pathname === item.path && (
                                        <div className="absolute right-3 w-2 h-2 bg-gradient-to-r from-primary to-blue-500 rounded-full" />
                                    )}
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
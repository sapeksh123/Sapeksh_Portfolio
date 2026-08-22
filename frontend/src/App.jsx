import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Navigation } from "./components/navigation"
import { SplashScreen } from "./components/SplashScreen"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const SPLASH_SESSION_KEY = "portfolio-splash-shown"

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    try {
      return !sessionStorage.getItem(SPLASH_SESSION_KEY)
    } catch {
      return true
    }
  })

  const handleSplashComplete = () => {
    try {
      sessionStorage.setItem(SPLASH_SESSION_KEY, "1")
    } catch {
      // storage unavailable — splash will just replay next load
    }
    setShowSplash(false)
  }

  return (
    <Router>
      <div className="bg-background">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" onComplete={handleSplashComplete} />}
      </AnimatePresence>
    </Router>
  )
}

export default App

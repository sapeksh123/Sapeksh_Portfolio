import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Download, Mail, ArrowRight, Sparkles, Code2 } from "lucide-react"
import { Link } from "react-router-dom"
import { homeContent } from "../content"
import { getIcon } from "../content/icons"

export default function Home() {
  return (
    <div className="min-h-screen lg:h-[calc(100vh-4rem)] lg:overflow-hidden flex items-center justify-center relative overflow-x-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-primary/20 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-accent/20 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-8 lg:h-full flex flex-col justify-center max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center min-h-0"
        >
          {/* Profile Image */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              {/* Outer gradient ring */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-r from-primary/40 via-blue-500/30 to-primary/40 blur-[1px] opacity-80" />
              <div className="absolute -inset-2 sm:-inset-3 rounded-full border-2 border-primary/30" />
              {/* Dashed circle */}
              <div className="absolute -inset-1 sm:-inset-2 rounded-full border border-dashed border-primary/20" />
              {/* Photo */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-border shadow-xl flex items-center justify-center bg-stone-200 dark:bg-stone-700">
                <img
                  src="/images/sapekshpic.jpg"
                  alt={homeContent.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left lg:order-1 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/80 border border-border rounded-full text-foreground font-medium text-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>{homeContent.greetingBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-primary">
                {homeContent.name}
              </span>
            </h1>

            <h2 className="text-lg sm:text-lg md:text-2xl font-semibold text-primary flex items-center justify-center lg:justify-start gap-2">
              {/* <Code2 className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" /> */}
              {homeContent.role}
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {homeContent.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <a
                  href={homeContent.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border border-border hover:bg-muted transition-colors duration-300"
              >
                <Link to="/contact" className="min-h-[44px] flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
              {homeContent.socialLinks.map((social) => {
                const IconComponent = getIcon(social.icon)
                if (!IconComponent) return null
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted/80 hover:bg-muted border border-border text-foreground hover:text-primary transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <div className="w-6 h-10 border border-border rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

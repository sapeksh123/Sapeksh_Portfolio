import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Download, Sparkles } from "lucide-react"
import { homeContent, skillCategories } from "../content"
import { getIcon } from "../content/icons"
import { MarqueeStrip } from "../components/MarqueeStrip"
import { NetworkGraphic } from "../components/NetworkGraphic"

const allSkills = skillCategories.flatMap((category) => category.skills)

export default function Home() {
  return (
    <div className="h-[calc(100vh-4rem)] overflow-hidden flex flex-col relative overflow-x-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem] bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="flex-1 min-h-0 flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8 max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-10 xl:gap-12 items-center min-h-0"
        >
          {/* Animated network graphic */}
          <div className="hidden lg:flex justify-center items-center lg:order-2 relative">
            <NetworkGraphic className="w-full max-w-md h-auto" />

            <motion.span
              className="absolute top-8 left-4 h-3 w-3 border border-primary/30"
              animate={{ rotate: [45, 405] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            <motion.span
              className="absolute bottom-16 right-8 h-4 w-4 border border-primary/20"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            <motion.span
              className="absolute bottom-4 left-1/3 h-8 w-8 rounded-full border border-primary/40 flex items-center justify-center"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
            </motion.span>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left lg:order-1 space-y-1.5 sm:space-y-3 lg:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:py-1.5 border border-border font-mono text-xs uppercase tracking-widest">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>{homeContent.greetingBadge}</span>
            </div>

            <h1 className="font-display uppercase text-2xl sm:text-4xl md:text-5xl lg:text-7xl leading-none">
              {homeContent.name}
            </h1>

            <h2 className="font-mono text-sm sm:text-base md:text-lg uppercase tracking-wide text-primary flex items-center justify-center lg:justify-start gap-2">
              {homeContent.role}
            </h2>

            <p className="hidden sm:block text-sm lg:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed line-clamp-2 lg:line-clamp-none">
              {homeContent.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-start pt-1 sm:pt-2">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a
                  href={homeContent.cvUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-1 sm:pt-2">
              {homeContent.socialLinks.map((social) => {
                const IconComponent = getIcon(social.icon)
                if (!IconComponent) return null
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-border text-foreground hover:text-primary hover:border-primary transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-border py-2 sm:py-4 flex-shrink-0">
        <MarqueeStrip tags={allSkills} />
      </div>
    </div>
  )
}

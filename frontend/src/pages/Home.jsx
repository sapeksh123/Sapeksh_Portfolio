import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ArrowRight, Download, MapPin } from "lucide-react"
import { homeContent, skillCategories } from "../content"
import { getIcon } from "../content/icons"
import { MarqueeStrip } from "../components/MarqueeStrip"
import { NetworkGraphic } from "../components/NetworkGraphic"

const allSkills = skillCategories.flatMap((category) => category.skills)

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100dvh-3.5rem)] flex-col overflow-x-hidden sm:min-h-[calc(100dvh-4rem)]">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:right-1/4 sm:h-96 sm:w-96 lg:h-[32rem] lg:w-[32rem]" />
      </div>

      <div className="container flex max-w-6xl flex-1 flex-col justify-center py-10 sm:py-12 lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10 xl:gap-12"
        >
          {/* Animated network graphic: compact on tablets, full size on desktop */}
          <div className="relative hidden items-center justify-center md:flex lg:order-2">
            <NetworkGraphic className="h-auto w-full max-w-[15rem] lg:max-w-md" />

            <motion.span
              className="absolute left-4 top-8 hidden h-3 w-3 border border-primary/30 lg:block"
              animate={{ rotate: [45, 405] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            <motion.span
              className="absolute bottom-16 right-8 hidden h-4 w-4 border border-primary/20 lg:block"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            <motion.span
              className="absolute bottom-4 left-1/3 hidden h-8 w-8 items-center justify-center rounded-full border border-primary/40 lg:flex"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
            </motion.span>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 border border-border bg-background/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:text-xs">
              <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span>{homeContent.greetingBadge}</span>
            </div>

            <h1 className="mt-5 font-display text-4xl uppercase leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl">
              {homeContent.name}
            </h1>

            <div className="mt-4 space-y-1 font-mono uppercase tracking-wide">
              <h2 className="text-base text-primary sm:text-lg">{homeContent.role}</h2>
              <p className="text-xs text-muted-foreground sm:text-sm">{homeContent.currentRole}</p>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:hidden">
              {homeContent.shortBio}
            </p>
            <p className="mt-6 hidden max-w-2xl text-base leading-relaxed text-muted-foreground lg:block xl:text-lg">
              {homeContent.bio}
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={homeContent.cvUrl} download>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex gap-3">
              {homeContent.socialLinks.map((social) => {
                const IconComponent = getIcon(social.icon)
                if (!IconComponent) return null
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                  >
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="shrink-0 border-t border-border py-3 sm:py-4">
        <MarqueeStrip tags={allSkills} />
      </div>
    </div>
  )
}

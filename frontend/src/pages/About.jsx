import { motion } from "framer-motion"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { aboutContent } from "../content"
import { getIcon } from "../content/icons"

function slug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "")
}

export default function About() {
  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <SectionHeader
          eyebrow="Profile"
          title={aboutContent.sectionTitle}
          titleHighlight={aboutContent.sectionTitleHighlight}
          subtitle={aboutContent.sectionSubtitle}
        />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* File-style panel: about.md rendered as commented sections */}
          <div className="xl:col-span-2 border border-border bg-card">
            <div className="flex items-center gap-2 px-4 sm:px-6 py-3 border-b border-border">
              <span className="h-2.5 w-2.5 border border-border" />
              <span className="h-2.5 w-2.5 border border-border" />
              <span className="h-2.5 w-2.5 border border-border" />
              <span className="font-mono text-xs text-muted-foreground ml-2">about.md</span>
            </div>
            <div className="divide-y divide-border">
              {aboutContent.highlights.map((highlight) => {
                const IconComponent = getIcon(highlight.icon)
                return (
                  <div key={highlight.title} className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-3 font-mono text-xs sm:text-sm text-primary">
                      {IconComponent && <IconComponent className="h-4 w-4 flex-shrink-0" />}
                      <span>// {slug(highlight.title)}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base pl-6 border-l border-border">
                      {highlight.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Stat panel: whoami --info */}
          <div className="xl:col-span-1 max-w-md mx-auto xl:max-w-none xl:mx-0">
            <div className="h-fit xl:sticky xl:top-24 border border-border bg-card">
              <div className="px-4 sm:px-6 py-3 border-b border-border font-mono text-xs sm:text-sm text-primary">
                $ whoami --info
              </div>
              <div className="divide-y divide-border">
                {aboutContent.quickInfo.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-3 py-3 px-4 sm:px-6">
                    <span className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                      {item.label}
                    </span>
                    <span
                      className={`font-bold text-sm sm:text-base text-right ${
                        item.valueHighlight ? "text-primary" : ""
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  )
}

import { motion } from "framer-motion"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { WindowBar } from "../components/WindowBar"
import { aboutContent } from "../content"
import { getIcon } from "../content/icons"

function slug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "")
}

export default function About() {
  return (
    <PageLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
        <SectionHeader
          eyebrow="Profile"
          title={aboutContent.sectionTitle}
          titleHighlight={aboutContent.sectionTitleHighlight}
          subtitle={aboutContent.sectionSubtitle}
        />

        <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 xl:grid-cols-3 xl:gap-10">
          {/* File-style panel: about.md rendered as commented sections */}
          <section className="border border-border bg-card xl:col-span-2" aria-label="About me">
            <WindowBar>
              <span className="font-mono text-xs text-muted-foreground">about.md</span>
            </WindowBar>
            <div className="divide-y divide-border">
              {aboutContent.highlights.map((highlight) => {
                const IconComponent = getIcon(highlight.icon)
                return (
                  <div key={highlight.title} className="p-4 sm:p-6">
                    <h2 className="mb-3 flex items-center gap-2 font-mono text-xs text-primary sm:text-sm">
                      {IconComponent && <IconComponent className="h-4 w-4 shrink-0" aria-hidden="true" />}
                      <span>// {slug(highlight.title)}</span>
                    </h2>
                    <p className="border-l border-border pl-4 text-sm leading-relaxed text-muted-foreground sm:pl-6 sm:text-base">
                      {highlight.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Stat panel: whoami --info */}
          <aside className="border border-border bg-card xl:sticky xl:top-24" aria-label="Quick info">
            <div className="border-b border-border px-4 py-3 font-mono text-xs text-primary sm:px-6 sm:text-sm">
              {aboutContent.quickInfo.title}
            </div>
            <dl className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 xl:grid-cols-1">
              {aboutContent.quickInfo.items.map((item) => {
                const IconComponent = getIcon(item.icon)
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 bg-card px-4 py-3.5 sm:px-6"
                  >
                    {IconComponent && (
                      <IconComponent className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    )}
                    <div className="min-w-0">
                      <dt className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                        {item.label}
                      </dt>
                      <dd className={`mt-0.5 text-sm font-semibold sm:text-base ${item.valueHighlight ? "text-primary" : ""}`}>
                        {item.value}
                      </dd>
                    </div>
                  </div>
                )
              })}
            </dl>
          </aside>
        </div>
      </motion.div>
    </PageLayout>
  )
}

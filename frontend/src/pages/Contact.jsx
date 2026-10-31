import { motion } from "framer-motion"
import { Card } from "../components/ui/card"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { ArrowUpRight, MessageCircle, Globe, Clock } from "lucide-react"
import { contactMethods, contactContent } from "../content"
import { getIcon } from "../content/icons"

function envVar(title) {
  return title.toUpperCase().replace(/[^A-Z0-9]+/g, "_")
}

export default function Contact() {
  return (
    <PageLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
        <SectionHeader
          eyebrow="Connect"
          title={contactContent.sectionTitle}
          titleHighlight={contactContent.sectionTitleHighlight}
          subtitle={contactContent.sectionSubtitle}
        />

        <div className="mx-auto max-w-4xl space-y-8 sm:space-y-12">
          <section className="border border-border bg-card" aria-label="Contact methods">
            <div className="border-b border-border px-4 py-3 font-mono text-xs text-primary sm:px-6 sm:text-sm">
              $ ./contact.sh
            </div>
            <ul className="divide-y divide-border">
              {contactMethods.map((method) => {
                const IconComponent = getIcon(method.icon)
                return (
                  <li key={method.title}>
                    <a
                      href={method.href}
                      {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      aria-label={`${method.title}: ${method.value}`}
                      className="group flex items-center gap-3 p-4 transition-colors hover:bg-muted/50 sm:gap-4 sm:px-6 sm:py-5"
                    >
                      {IconComponent && (
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-primary/10 text-primary sm:h-11 sm:w-11">
                          <IconComponent className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                      <span className="min-w-0 flex-1">
                        <span className="block font-mono text-[11px] text-muted-foreground sm:text-xs">
                          $ echo ${envVar(method.title)}
                        </span>
                        <span className="block break-words text-sm font-semibold text-foreground transition-colors group-hover:text-primary sm:text-base">
                          {method.value}
                        </span>
                      </span>
                      <span
                        className="flex h-9 shrink-0 items-center justify-center gap-1.5 border border-border px-2.5 font-mono text-xs uppercase tracking-wide text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary"
                        aria-hidden="true"
                      >
                        <span className="hidden sm:inline">Open</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>

          <Card className="border-primary bg-primary px-5 py-8 text-primary-foreground sm:px-10 sm:py-14">
            <div className="mb-8 text-center sm:mb-10">
              <MessageCircle className="mx-auto mb-4 h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
              <h2 className="mb-3 font-display text-2xl uppercase leading-tight sm:mb-4 sm:text-4xl">
                {contactContent.ctaTitle}
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed opacity-90 sm:text-base">
                {contactContent.ctaDescription}
              </p>
            </div>

            <dl className="grid grid-cols-1 gap-6 border-t border-primary-foreground/20 pt-6 sm:grid-cols-2 sm:pt-8">
              <div className="text-center">
                <dt className="mb-2 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wide sm:text-sm">
                  <Globe className="h-4 w-4" aria-hidden="true" />
                  {contactContent.locationLabel}
                </dt>
                <dd className="text-sm opacity-90 sm:text-base">{contactContent.locationValue}</dd>
              </div>
              <div className="text-center">
                <dt className="mb-2 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wide sm:text-sm">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {contactContent.responseLabel}
                </dt>
                <dd className="text-sm opacity-90 sm:text-base">{contactContent.responseValue}</dd>
              </div>
            </dl>
          </Card>
        </div>
      </motion.div>
    </PageLayout>
  )
}

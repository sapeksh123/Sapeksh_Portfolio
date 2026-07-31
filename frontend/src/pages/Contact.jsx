import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { Send, MessageCircle, Globe, Clock } from "lucide-react"
import { contactMethods, contactContent } from "../content"
import { getIcon } from "../content/icons"

function envVar(title) {
  return title.toUpperCase().replace(/[^A-Z0-9]+/g, "_")
}

export default function Contact() {
  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <SectionHeader
          eyebrow="Connect"
          title={contactContent.sectionTitle}
          titleHighlight={contactContent.sectionTitleHighlight}
          subtitle={contactContent.sectionSubtitle}
        />

        <div className="max-w-3xl mx-auto border border-border bg-card mb-12 sm:mb-16">
          <div className="flex items-center gap-2 px-4 sm:px-6 py-3 border-b border-border font-mono text-xs sm:text-sm text-primary">
            $ ./contact.sh
          </div>
          <div className="divide-y divide-border">
            {contactMethods.map((method) => {
              const IconComponent = getIcon(method.icon)
              const SendIcon = getIcon("Send")
              return (
                <div
                  key={method.title}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-6"
                >
                  {IconComponent && (
                    <div className="p-2.5 border border-border bg-primary/10 text-primary flex-shrink-0">
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-xs sm:text-sm text-muted-foreground">
                      $ echo ${envVar(method.title)}
                    </p>
                    <p className="font-bold text-primary text-sm sm:text-base break-all">
                      {method.value}
                    </p>
                  </div>
                  <Button asChild size="sm" className="flex-shrink-0 min-h-[44px] w-full sm:w-auto">
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      {SendIcon && <SendIcon className="h-4 w-4" />}
                      Connect
                    </a>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary text-primary-foreground border-primary overflow-hidden">
            <CardContent className="py-10 sm:py-16 relative">
              <div className="text-center mb-8 sm:mb-10">
                <div className="flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="font-display uppercase text-2xl sm:text-4xl leading-tight mb-4">
                  {contactContent.ctaTitle}
                </h3>
                <p className="max-w-2xl mx-auto leading-relaxed text-sm sm:text-base opacity-90">
                  {contactContent.ctaDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3 gap-3">
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                    <h4 className="font-mono uppercase tracking-wide text-sm sm:text-base">
                      {contactContent.locationLabel}
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base opacity-90">
                    {contactContent.locationValue}
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-3 gap-3">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                    <h4 className="font-mono uppercase tracking-wide text-sm sm:text-base">
                      {contactContent.responseLabel}
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base opacity-90">
                    {contactContent.responseValue}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </PageLayout>
  )
}

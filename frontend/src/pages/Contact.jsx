import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { Send, MessageCircle, Globe, Clock } from "lucide-react"
import { contactMethods, contactContent } from "../content"
import { getIcon } from "../content/icons"

export default function Contact() {
  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <SectionHeader
          title={contactContent.sectionTitle}
          titleHighlight={contactContent.sectionTitleHighlight}
          subtitle={contactContent.sectionSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {contactMethods.map((method) => {
            const IconComponent = getIcon(method.icon)
            const SendIcon = getIcon("Send")
            return (
              <Card
                key={method.title}
                className={`h-full hover:shadow-lg transition-shadow duration-300 border-0 ${method.bgPattern} text-center`}
              >
                <CardHeader className="p-4 sm:p-6 pb-4">
                  <div className="flex justify-center mb-4">
                    {IconComponent && (
                      <div className="p-4 sm:p-5 rounded-lg bg-primary/10 text-primary">
                        <IconComponent className="h-6 w-6 sm:h-8 sm:w-8" />
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg sm:text-xl mb-2 font-bold">
                    {method.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {method.description}
                  </p>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pt-0">
                  <p className="font-bold mb-4 text-primary text-sm sm:text-base break-all">
                    {method.value}
                  </p>
                  <Button
                    asChild
                    className="w-full min-h-[44px] bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-shadow"
                  >
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
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 via-blue-500/10 to-accent/10 border-primary/20 shadow-lg overflow-hidden">
            <CardContent className="py-8 sm:py-12 relative">
              <div className="text-center mb-8 sm:mb-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary to-blue-500 text-white shadow-md">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {contactContent.ctaTitle}
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                  {contactContent.ctaDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3 gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h4 className="font-bold text-sm sm:text-base">
                      {contactContent.locationLabel}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {contactContent.locationValue}
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-3 gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h4 className="font-bold text-sm sm:text-base">
                      {contactContent.responseLabel}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">
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

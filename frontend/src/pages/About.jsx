import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { Target } from "lucide-react"
import { aboutContent } from "../content"
import { getIcon } from "../content/icons"

export default function About() {
  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <SectionHeader
          title={aboutContent.sectionTitle}
          titleHighlight={aboutContent.sectionTitleHighlight}
          subtitle={aboutContent.sectionSubtitle}
        />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12 mb-12 sm:mb-16">
          <div className="xl:col-span-2 space-y-6">
            {aboutContent.highlights.map((highlight) => {
              const IconComponent = getIcon(highlight.icon)
              return (
                <Card
                  key={highlight.title}
                  className={`hover:shadow-lg transition-shadow duration-300 border-0 ${highlight.bgPattern}`}
                >
                  <CardHeader className="p-4 sm:p-6 pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                      {IconComponent && (
                        <div className="p-3 sm:p-4 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                      )}
                      <span className="leading-tight font-bold">{highlight.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="xl:col-span-1 max-w-md mx-auto xl:max-w-none xl:mx-0">
            <Card className="h-fit xl:sticky xl:top-24 bg-gradient-to-br from-primary/5 via-blue-500/5 to-accent/5 border-primary/20 shadow-lg">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary flex-shrink-0" />
                  {aboutContent.quickInfo.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pt-0">
                <div className="space-y-4">
                  {aboutContent.quickInfo.items.map((item) => {
                    const IconComponent = getIcon(item.icon)
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 py-3 border-b border-primary/10 last:border-0 hover:bg-primary/5 rounded-lg px-2 transition-colors"
                      >
                        {IconComponent && (
                          <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                            <IconComponent className="h-4 w-4" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <span className="block text-xs sm:text-sm text-muted-foreground font-medium">
                            {item.label}
                          </span>
                          <span
                            className={`font-bold text-sm sm:text-base ${
                              item.valueHighlight ? "text-green-600 dark:text-green-400" : ""
                            }`}
                          >
                            {item.value}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  )
}

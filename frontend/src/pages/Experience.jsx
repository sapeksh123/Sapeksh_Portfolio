import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { MapPin, Calendar } from "lucide-react"
import { experiences, experienceContent } from "../content"
import { getIcon } from "../content/icons"

export default function Experience() {
  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <SectionHeader
          title={experienceContent.sectionTitle}
          titleHighlight={experienceContent.sectionTitleHighlight}
          subtitle={experienceContent.sectionSubtitle}
        />

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => {
            const IconComponent = getIcon(exp.icon)
            return (
              <Card key={exp.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="flex-shrink-0 flex justify-center sm:justify-start">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        {IconComponent && (
                          <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                        )}
                      </div>
                    </div>

                    <div className="flex-grow text-center sm:text-left">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="mb-4 lg:mb-0">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 leading-tight">
                            {exp.title}
                          </h3>
                          <p className="text-base sm:text-lg text-primary font-medium mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 flex-shrink-0" />
                              <span className="text-sm sm:text-base">{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 flex-shrink-0" />
                              <span className="text-sm sm:text-base">{exp.duration}</span>
                            </div>
                          </div>
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div className="mb-4 sm:mb-6">
                        <h4 className="font-semibold mb-3 text-sm sm:text-base">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li
                              key={i}
                              className="text-muted-foreground flex items-start gap-2 text-sm sm:text-base"
                            >
                              <span className="text-primary mt-1 flex-shrink-0">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-sm sm:text-base">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </motion.div>
    </PageLayout>
  )
}

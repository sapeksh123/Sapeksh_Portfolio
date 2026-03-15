import { motion } from "framer-motion"
import { Card, CardContent } from "../components/ui/card"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { GraduationCap, Calendar, Award, School } from "lucide-react"
import { education, educationContent, certificates } from "../content"

export default function Education() {
  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <SectionHeader
          title={educationContent.sectionTitle}
          titleHighlight={educationContent.sectionTitleHighlight}
          subtitle={educationContent.sectionSubtitle}
        />

        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <Card key={edu.degree} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      {index === 0 ? (
                        <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      ) : (
                        <School className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      )}
                    </div>
                  </div>

                  <div className="flex-grow text-center sm:text-left">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="mb-4 lg:mb-0">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-base sm:text-lg text-primary font-medium mb-2">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="lg:text-right">
                        <div className="flex items-center justify-center lg:justify-end gap-2 text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span className="text-sm sm:text-base">{edu.duration}</span>
                        </div>
                        <div className="text-primary font-semibold text-base sm:text-lg">
                          {edu.grade}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center justify-center sm:justify-start gap-2">
                        <Award className="h-4 w-4 text-primary flex-shrink-0" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-1">
                        {edu.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-2 text-sm sm:text-base"
                          >
                            <span className="text-primary mt-1 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {certificates && certificates.length > 0 && (
          <div className="mt-12 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-7 w-7 text-primary flex-shrink-0" />
              Certificates
            </h2>
            <div className="space-y-4">
              {certificates.map((cert) => (
                <Card key={cert.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-base sm:text-lg">{cert.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">{cert.issuer}</p>
                    </div>
                    <span className="text-primary font-medium text-sm sm:text-base flex-shrink-0">
                      {cert.date}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </PageLayout>
  )
}

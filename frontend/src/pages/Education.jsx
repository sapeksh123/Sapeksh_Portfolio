import { motion } from "framer-motion"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { Calendar, Award } from "lucide-react"
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
          eyebrow="Academics"
          title={educationContent.sectionTitle}
          titleHighlight={educationContent.sectionTitleHighlight}
          subtitle={educationContent.sectionSubtitle}
        />

        <div className="relative max-w-3xl mx-auto pl-8 sm:pl-10 border-l border-border space-y-10 sm:space-y-12">
          {education.map((edu) => (
            <div key={edu.degree} className="relative">
              <span className="absolute -left-[calc(2rem+1px)] sm:-left-[calc(2.5rem+1px)] top-1 h-3 w-3 border border-primary bg-background" />

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-base sm:text-lg text-primary font-medium">
                    {edu.institution}
                  </p>
                </div>
                <div className="lg:text-right flex-shrink-0">
                  <div className="flex items-center lg:justify-end gap-2 text-muted-foreground mb-1 font-mono text-sm uppercase">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="text-primary font-semibold text-base sm:text-lg">
                    {edu.grade}
                  </div>
                </div>
              </div>

              <ul className="space-y-1">
                {edu.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm sm:text-base">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {certificates && certificates.length > 0 && (
          <div className="mt-12 sm:mt-16 max-w-3xl mx-auto">
            <h2 className="font-display uppercase text-2xl sm:text-3xl mb-6 flex items-center gap-2">
              <Award className="h-7 w-7 text-primary flex-shrink-0" />
              Certificates
            </h2>
            <div className="border border-border bg-card divide-y divide-border">
              {certificates.map((cert) => (
                <div key={cert.title} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{cert.issuer}</p>
                  </div>
                  <span className="text-primary font-mono uppercase text-sm flex-shrink-0">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </PageLayout>
  )
}

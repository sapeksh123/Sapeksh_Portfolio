import { motion } from "framer-motion"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { MapPin, Calendar } from "lucide-react"
import { experiences, experienceContent } from "../content"
import { getIcon } from "../content/icons"

function logSlug(company) {
  return company.split(",")[0].toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

export default function Experience() {
  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <SectionHeader
          eyebrow="Career"
          title={experienceContent.sectionTitle}
          titleHighlight={experienceContent.sectionTitleHighlight}
          subtitle={experienceContent.sectionSubtitle}
        />

        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp) => {
            const IconComponent = getIcon(exp.icon)
            return (
              <div key={exp.title} className="border border-border bg-card">
                <div className="flex items-center gap-2 px-4 sm:px-6 py-3 border-b border-border font-mono text-xs sm:text-sm text-primary">
                  {IconComponent && <IconComponent className="h-4 w-4 flex-shrink-0" />}
                  <span>$ cat experience/{logSlug(exp.company)}.log</span>
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-base sm:text-lg text-primary font-medium mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-2 sm:gap-4 text-muted-foreground font-mono text-sm uppercase">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 border border-primary text-primary font-mono uppercase text-xs flex-shrink-0">
                      {exp.type}
                    </span>
                  </div>

                  <ul className="space-y-1.5 mb-4 sm:mb-6">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start gap-2 text-sm sm:text-base font-mono"
                      >
                        <span className="text-primary flex-shrink-0">&gt;</span>
                        <span className="font-sans">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary"># tech_stack: </span>
                    {exp.technologies.join(", ")}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </PageLayout>
  )
}

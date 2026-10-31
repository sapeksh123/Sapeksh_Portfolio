import { motion } from "framer-motion"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { Timeline, TimelineItem } from "../components/Timeline"
import { Calendar, Award, MapPin } from "lucide-react"
import { education, educationContent, certificates } from "../content"

export default function Education() {
  return (
    <PageLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
        <SectionHeader
          eyebrow="Academics"
          title={educationContent.sectionTitle}
          titleHighlight={educationContent.sectionTitleHighlight}
          subtitle={educationContent.sectionSubtitle}
        />

        <Timeline className="mx-auto max-w-3xl">
          {education.map((edu, idx) => (
            <TimelineItem key={edu.degree} active={idx === 0} markerClassName="top-2 lg:top-2.5">
              <div className="mb-3 flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
                <div className="min-w-0">
                  <h2 className="text-lg font-bold leading-snug sm:text-xl lg:text-2xl">{edu.degree}</h2>
                  <p className="mt-1 text-base font-medium text-primary sm:text-lg">{edu.institution}</p>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1 lg:flex-col lg:items-end lg:gap-1">
                  <span className="flex items-center gap-1.5 font-mono text-xs uppercase text-muted-foreground sm:text-sm">
                    <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {edu.duration}
                  </span>
                  <span className="font-mono text-sm font-semibold text-primary sm:text-base">{edu.grade}</span>
                </div>
              </div>

              <ul className="space-y-1.5">
                {edu.description.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground sm:text-base">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
                {edu.location && (
                  <li className="flex items-center gap-1.5 pt-0.5 font-mono text-xs uppercase text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {edu.location}
                  </li>
                )}
              </ul>
            </TimelineItem>
          ))}
        </Timeline>

        {certificates?.length > 0 && (
          <section className="mx-auto mt-12 max-w-3xl sm:mt-16">
            <h2 className="mb-5 flex items-center gap-2.5 font-display text-2xl uppercase sm:mb-6 sm:text-3xl">
              <Award className="h-6 w-6 shrink-0 text-primary sm:h-7 sm:w-7" aria-hidden="true" />
              Certifications
            </h2>
            <ul className="divide-y divide-border border border-border bg-card">
              {certificates.map((cert) => (
                <li
                  key={cert.title}
                  className="flex flex-col gap-1.5 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-6"
                >
                  <div className="min-w-0">
                    <h3 className="text-base font-bold sm:text-lg">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground sm:text-base">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs uppercase tracking-wide text-primary">{cert.date}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </motion.div>
    </PageLayout>
  )
}

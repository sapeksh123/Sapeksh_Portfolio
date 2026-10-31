import { motion } from "framer-motion"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { Timeline, TimelineItem } from "../components/Timeline"
import { TagList } from "../components/TagList"
import { MapPin, Calendar } from "lucide-react"
import { experiences, experienceContent } from "../content"
import { getIcon } from "../content/icons"

export default function Experience() {
  return (
    <PageLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
        <SectionHeader
          eyebrow="Career"
          title={experienceContent.sectionTitle}
          titleHighlight={experienceContent.sectionTitleHighlight}
          subtitle={experienceContent.sectionSubtitle}
        />

        <Timeline className="mx-auto max-w-4xl">
          {experiences.map((exp) => {
            const IconComponent = getIcon(exp.icon)
            return (
              <TimelineItem key={`${exp.company}-${exp.title}`} active={exp.current} markerClassName="top-[15px] sm:top-[17px]">
                <article className="border border-border bg-card">
                  <div className="flex min-w-0 items-center gap-2 border-b border-border px-4 py-3 font-mono text-xs text-primary sm:px-6 sm:text-sm">
                    {IconComponent && <IconComponent className="h-4 w-4 shrink-0" aria-hidden="true" />}
                    <span className="min-w-0 truncate">$ cat {exp.slug}.log</span>
                    {exp.current && (
                      <span className="ml-auto flex shrink-0 items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                        <span className="h-1.5 w-1.5 animate-pulse bg-primary" aria-hidden="true" />
                        Current
                      </span>
                    )}
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="mb-4 flex flex-col gap-3 sm:mb-5 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0">
                        <h2 className="text-lg font-bold leading-snug sm:text-xl lg:text-2xl">{exp.title}</h2>
                        <p className="mt-1 text-base font-medium text-primary sm:text-lg">{exp.company}</p>
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase text-muted-foreground sm:text-sm">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 shrink-0" aria-hidden="true" />
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      <span className="self-start border border-primary px-2.5 py-1 font-mono text-xs uppercase text-primary">
                        {exp.type}
                      </span>
                    </div>

                    <ul className="mb-5 space-y-2 sm:mb-6">
                      {exp.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-2.5 text-sm text-muted-foreground sm:text-base">
                          <span className="shrink-0 font-mono text-primary" aria-hidden="true">
                            &gt;
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mb-2.5 font-mono text-xs text-primary"># tech_stack</p>
                    <TagList tags={exp.technologies} label={`${exp.company} tech stack`} />
                  </div>
                </article>
              </TimelineItem>
            )
          })}
        </Timeline>
      </motion.div>
    </PageLayout>
  )
}

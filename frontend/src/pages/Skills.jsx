import { motion } from "framer-motion"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { IndexBadge } from "../components/IndexBadge"
import { TagList } from "../components/TagList"
import { skillCategories, skillsContent } from "../content"
import { getIcon } from "../content/icons"

export default function Skills() {
  return (
    <PageLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
        <SectionHeader
          eyebrow="Expertise"
          title={skillsContent.sectionTitle}
          titleHighlight={skillsContent.sectionTitleHighlight}
          subtitle={skillsContent.sectionSubtitle}
        />

        <div className="mx-auto max-w-4xl border border-border bg-card">
          <div className="border-b border-border px-4 py-3 font-mono text-xs text-primary sm:px-6 sm:text-sm">
            $ ls -la ./skills
          </div>
          <ul className="divide-y divide-border">
            {skillCategories.map((category, i) => {
              const IconComponent = getIcon(category.icon)
              return (
                <li
                  key={category.title}
                  className="flex flex-col gap-3 p-4 transition-colors duration-200 hover:bg-muted/40 sm:flex-row sm:items-start sm:gap-4 sm:p-5"
                >
                  <div className="flex shrink-0 items-center gap-2.5 sm:w-48 sm:pt-0.5 md:w-56">
                    <IndexBadge index={i} />
                    {IconComponent && <IconComponent className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />}
                    <h2 className="font-mono text-sm uppercase leading-tight tracking-wide text-foreground">
                      {category.title}
                    </h2>
                  </div>
                  <TagList tags={category.skills} label={category.title} className="min-w-0 flex-1" />
                </li>
              )
            })}
          </ul>
        </div>
      </motion.div>
    </PageLayout>
  )
}

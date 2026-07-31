import { motion } from "framer-motion"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { IndexBadge } from "../components/IndexBadge"
import { skillCategories, skillsContent } from "../content"
import { getIcon } from "../content/icons"

export default function Skills() {
  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <SectionHeader
          eyebrow="Expertise"
          title={skillsContent.sectionTitle}
          titleHighlight={skillsContent.sectionTitleHighlight}
          subtitle={skillsContent.sectionSubtitle}
        />

        <div className="max-w-4xl mx-auto border border-border bg-card">
          <div className="flex items-center gap-2 px-4 sm:px-6 py-3 border-b border-border font-mono text-xs sm:text-sm text-primary">
            $ ls -la ./skills
          </div>
          <div className="divide-y divide-border">
            {skillCategories.map((category, i) => {
              const IconComponent = getIcon(category.icon)
              return (
                <div
                  key={category.title}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 p-4 sm:p-5 hover:bg-muted/30 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2 sm:w-56 flex-shrink-0">
                    <IndexBadge index={i} />
                    {IconComponent && <IconComponent className="h-4 w-4 text-primary flex-shrink-0" />}
                    <h3 className="font-mono uppercase tracking-wide text-foreground text-sm">
                      {category.title}
                    </h3>
                  </div>
                  <p className="font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {category.skills.join(", ")}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </PageLayout>
  )
}

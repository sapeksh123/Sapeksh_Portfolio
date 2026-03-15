import { motion } from "framer-motion"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
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
          title={skillsContent.sectionTitle}
          titleHighlight={skillsContent.sectionTitleHighlight}
          subtitle={skillsContent.sectionSubtitle}
        />

        <ul className="space-y-3 max-w-4xl mx-auto">
          {skillCategories.map((category) => {
            const IconComponent = getIcon(category.icon)
            return (
              <li
                key={category.title}
                className="group flex flex-col gap-3 p-4 sm:p-5 rounded-xl border border-border bg-card/50 hover:bg-card hover:shadow-md hover:border-primary/20 transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                    {IconComponent && (
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </span>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 pl-11 sm:pl-11">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-muted/80 px-3 py-1.5 text-sm text-foreground/90 border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </li>
            )
          })}
        </ul>
      </motion.div>
    </PageLayout>
  )
}

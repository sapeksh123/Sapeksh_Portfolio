import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { IndexBadge } from "../components/IndexBadge"
import { ExternalLink, Github, Eye, Star } from "lucide-react"
import { projects, projectsContent } from "../content"
import { getIcon } from "../content/icons"

function fileSlug(title) {
  return title.split(/[–-]/)[0].trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
}

export default function Projects() {
  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <SectionHeader
          eyebrow="Work"
          title={projectsContent.sectionTitle}
          titleHighlight={projectsContent.sectionTitleHighlight}
          subtitle={projectsContent.sectionSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => {
            const IconComponent = getIcon(project.icon)
            return (
              <Card
                key={project.title}
                className="h-full hover:border-primary/40 transition-colors duration-300 flex flex-col"
              >
                <div className="flex items-center gap-2 px-4 sm:px-6 py-3 border-b border-border">
                  <span className="h-2.5 w-2.5 border border-border" />
                  <span className="h-2.5 w-2.5 border border-border" />
                  <span className="h-2.5 w-2.5 border border-border" />
                  <span className="font-mono text-xs text-muted-foreground ml-2 truncate">
                    {fileSlug(project.title)}.jsx
                  </span>
                  <div className="flex-1" />
                  {project.featured && (
                    <div className="flex items-center gap-1 px-2 py-0.5 border border-primary text-primary font-mono uppercase text-xs flex-shrink-0">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Featured</span>
                    </div>
                  )}
                  <IndexBadge index={i} className="flex-shrink-0" />
                </div>

                <CardHeader className="p-4 sm:p-6 pb-4">
                  <div className="flex items-start gap-3 mb-3">
                    {IconComponent && (
                      <div className="p-3 sm:p-4 border border-border bg-primary/10 text-primary flex-shrink-0">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                    )}
                    <CardTitle className="text-lg sm:text-xl leading-tight font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 border border-border text-foreground font-mono text-xs uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {project.liveUrl && (
                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="flex-1 min-h-[44px]"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className={`${project.liveUrl ? "flex-1" : "w-full"} min-h-[44px] hover:border-primary hover:bg-primary/5 transition-colors`}
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16 max-w-4xl mx-auto">
          <Card>
            <CardContent className="py-8 sm:py-12 relative">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 border border-border bg-primary/10 text-primary">
                  <Github className="h-6 w-6" />
                </div>
              </div>
              <h3 className="font-display uppercase text-xl sm:text-2xl mb-4">{projectsContent.ctaTitle}</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                {projectsContent.ctaDescription}
              </p>
              <Button asChild size="lg" className="min-h-[44px]">
                <a
                  href={projectsContent.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  {projectsContent.ctaButtonLabel}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </PageLayout>
  )
}

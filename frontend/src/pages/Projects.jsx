import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { ExternalLink, Github, Eye, Star } from "lucide-react"
import { projects, projectsContent } from "../content"
import { getIcon } from "../content/icons"

export default function Projects() {
  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <SectionHeader
          title={projectsContent.sectionTitle}
          titleHighlight={projectsContent.sectionTitleHighlight}
          subtitle={projectsContent.sectionSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => {
            const IconComponent = getIcon(project.icon)
            return (
              <Card
                key={project.title}
                className={`h-full hover:shadow-lg transition-shadow duration-300 border-0 ${project.bgPattern} relative overflow-hidden`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 px-2 py-1 bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 rounded-full text-xs font-bold">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                <CardHeader className="p-4 sm:p-6 pb-4">
                  <div className="flex items-start gap-3 mb-3">
                    {IconComponent && (
                      <div
                        className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${project.color} text-white flex-shrink-0 shadow-md`}
                      >
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
                        className="px-2 sm:px-3 py-1 bg-white/80 dark:bg-gray-800/80 text-foreground rounded-full text-xs sm:text-sm font-medium shadow-sm border border-gray-200/50 dark:border-gray-700/50"
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
                        className="flex-1 min-h-[44px] bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-shadow"
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
                      className={`${project.liveUrl ? "flex-1" : "w-full"} min-h-[44px] border-2 border-gray-200 dark:border-gray-700 hover:border-primary/40 hover:bg-primary/5 transition-colors`}
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
          <Card className="bg-gradient-to-br from-primary/10 via-blue-500/10 to-accent/10 border-primary/20 shadow-lg overflow-hidden">
            <CardContent className="py-8 sm:py-12 relative">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-primary to-blue-500 text-white shadow-md">
                  <Github className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{projectsContent.ctaTitle}</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                {projectsContent.ctaDescription}
              </p>
              <Button
                asChild
                size="lg"
                className="min-h-[44px] bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-shadow"
              >
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

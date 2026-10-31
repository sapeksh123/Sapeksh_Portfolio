import { motion } from "framer-motion"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { PageLayout } from "../components/PageLayout"
import { SectionHeader } from "../components/SectionHeader"
import { EyebrowLabel } from "../components/EyebrowLabel"
import { IndexBadge } from "../components/IndexBadge"
import { TagList } from "../components/TagList"
import { WindowBar } from "../components/WindowBar"
import { ExternalLink, Github, Eye, Star } from "lucide-react"
import { projects, projectsContent } from "../content"
import { getIcon } from "../content/icons"

// "GrowEdge – Agriculture Platform" -> "growedge"; "E-Commerce Platform" -> "e-commerce-platform"
function fileSlug(title) {
  return title
    .split(/\s[–-]\s/)[0]
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

// Resolve icon components once at module level (not during render).
const withIcons = projects.map((p) => ({ ...p, Icon: getIcon(p.icon) }))
const featuredProjects = withIcons.filter((p) => p.featured)
const otherProjects = withIcons.filter((p) => !p.featured)

function ProjectIcon({ icon: IconComponent, large = false }) {
  if (!IconComponent) return null
  return (
    <div
      className={`flex shrink-0 items-center justify-center border border-border bg-primary/10 text-primary ${
        large ? "h-12 w-12 sm:h-14 sm:w-14" : "h-10 w-10"
      }`}
    >
      <IconComponent className={large ? "h-6 w-6" : "h-5 w-5"} aria-hidden="true" />
    </div>
  )
}

function FeaturedCard({ project, index }) {
  return (
    <Card className="flex h-full flex-col transition-colors duration-300 hover:border-primary/50">
      <WindowBar>
        <span className="hidden min-w-0 truncate font-mono text-xs text-muted-foreground sm:inline">
          {fileSlug(project.title)}.jsx
        </span>
        <div className="flex-1" />
        <span className="flex shrink-0 items-center gap-1.5 border border-primary px-2 py-0.5 font-mono text-xs uppercase text-primary">
          <Star className="h-3 w-3 fill-current" aria-hidden="true" />
          <span className="hidden sm:inline">Featured</span>
          <span className="sr-only sm:hidden">Featured</span>
        </span>
        <IndexBadge index={index} className="shrink-0" />
      </WindowBar>

      <div className="flex flex-1 flex-col p-4 sm:p-6 lg:p-8">
        <div className="mb-4 flex items-start gap-4">
          <ProjectIcon icon={project.Icon} large />
          <div className="min-w-0">
            <h3 className="font-display text-2xl uppercase leading-none sm:text-3xl">{project.title}</h3>
            <p className="mt-1.5 text-sm font-medium text-primary sm:text-base">{project.tagline}</p>
            {project.platforms && (
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                {project.platforms}
              </p>
            )}
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{project.description}</p>

        <ul className="mb-5 space-y-2 sm:mb-6">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground/90 sm:text-[15px]">
              <span className="mt-2 h-1 w-1 shrink-0 bg-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <TagList tags={project.tech} label={`${project.title} tech stack`} />

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
            {project.liveUrl && (
              <Button asChild className="min-h-[44px]">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Visit {project.liveLabel ?? "site"}
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" className="min-h-[44px]">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Card className="flex h-full flex-col transition-colors duration-300 hover:border-primary/50">
      <WindowBar>
        <span className="min-w-0 truncate font-mono text-xs text-muted-foreground">{fileSlug(project.title)}.jsx</span>
        <div className="flex-1" />
        <IndexBadge index={index} className="shrink-0" />
      </WindowBar>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-3">
          <ProjectIcon icon={project.Icon} />
          <h3 className="min-w-0 text-base font-bold leading-snug sm:text-lg">{project.title}</h3>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <TagList tags={project.tech} label={`${project.title} tech stack`} className="mb-5" />

        <div className="mt-auto flex gap-2">
          {project.liveUrl && (
            <Button asChild size="sm" className="h-11 flex-1">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild size="sm" variant="outline" className="h-11 flex-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" aria-hidden="true" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

export default function Projects() {
  return (
    <PageLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
        <SectionHeader
          eyebrow="Work"
          title={projectsContent.sectionTitle}
          titleHighlight={projectsContent.sectionTitleHighlight}
          subtitle={projectsContent.sectionSubtitle}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <section className="mt-14 sm:mt-20" aria-labelledby="other-projects">
            <div className="mb-6 flex flex-col gap-2 sm:mb-8">
              <EyebrowLabel>Archive</EyebrowLabel>
              <h2 id="other-projects" className="font-display text-2xl uppercase sm:text-3xl">
                {projectsContent.otherTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={featuredProjects.length + i} />
              ))}
            </div>
          </section>
        )}

        <div className="mx-auto mt-14 max-w-4xl sm:mt-20">
          <Card className="px-5 py-8 text-center sm:px-8 sm:py-12">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center border border-border bg-primary/10 text-primary">
                <Github className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <h2 className="mb-3 font-display text-xl uppercase sm:text-2xl">{projectsContent.ctaTitle}</h2>
            <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
              {projectsContent.ctaDescription}
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={projectsContent.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" aria-hidden="true" />
                {projectsContent.ctaButtonLabel}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </Card>
        </div>
      </motion.div>
    </PageLayout>
  )
}

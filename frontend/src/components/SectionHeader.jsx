import { EyebrowLabel } from "./EyebrowLabel"

/**
 * Consistent section header for About, Skills, Projects, Experience, Education, Contact.
 */
export function SectionHeader({ eyebrow, title, titleHighlight, subtitle }) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      {eyebrow && (
        <div className="flex justify-center mb-4">
          <EyebrowLabel>{eyebrow}</EyebrowLabel>
        </div>
      )}
      <h1 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl mb-4">
        {title} <span className="text-primary">{titleHighlight}</span>
      </h1>
      {subtitle && (
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

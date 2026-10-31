import { EyebrowLabel } from "./EyebrowLabel"

/**
 * Consistent page header for About, Skills, Projects, Experience, Education, Contact.
 */
export function SectionHeader({ eyebrow, title, titleHighlight, subtitle }) {
  return (
    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
      {eyebrow && (
        <div className="flex justify-center mb-3 sm:mb-4">
          <EyebrowLabel>{eyebrow}</EyebrowLabel>
        </div>
      )}
      <h1 className="font-display uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none text-balance mb-3 sm:mb-4">
        {title} <span className="text-primary">{titleHighlight}</span>
      </h1>
      {subtitle && (
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">{subtitle}</p>
      )}
    </div>
  )
}

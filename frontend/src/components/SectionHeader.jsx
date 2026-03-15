/**
 * Consistent section header for About, Skills, Projects, Experience, Education, Contact.
 */
export function SectionHeader({ title, titleHighlight, subtitle }) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
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

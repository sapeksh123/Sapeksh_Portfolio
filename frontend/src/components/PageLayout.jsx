/**
 * Shared page wrapper for consistent vertical padding and container.
 * Use for all non-Home pages.
 */
export function PageLayout({ children, className = "" }) {
  return (
    <div className={`min-h-screen pt-6 sm:pt-8 pb-16 sm:pb-20 ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </div>
  )
}

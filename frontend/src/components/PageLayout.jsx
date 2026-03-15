/**
 * Shared page wrapper for consistent vertical padding and container.
 * Use for all non-Home pages.
 */
export function PageLayout({ children, className = "" }) {
  return (
    <div className={`min-h-screen py-16 sm:py-20 ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </div>
  )
}

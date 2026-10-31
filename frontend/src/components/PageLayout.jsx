/**
 * Shared page wrapper for consistent vertical padding and width.
 * Use for all non-Home pages.
 */
export function PageLayout({ children, className = "" }) {
  return (
    <div className={`pt-8 sm:pt-12 pb-16 sm:pb-24 ${className}`}>
      <div className="container max-w-6xl">{children}</div>
    </div>
  )
}

/**
 * Small monospace uppercase label with a leading rule, shown above section headlines.
 */
export function EyebrowLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-widest text-primary">
      <span className="h-px w-6 bg-primary" aria-hidden="true" />
      {children}
    </span>
  )
}

/**
 * Zero-padded numbered index badge (01, 02, ...) for skill/project cards.
 */
export function IndexBadge({ index, className = "" }) {
  return (
    <span
      className={`font-mono text-xs sm:text-sm text-muted-foreground border border-border px-2 py-1 ${className}`}
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  )
}

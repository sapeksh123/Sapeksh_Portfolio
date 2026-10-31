/**
 * Zero-padded numbered index badge (01, 02, ...) for skill/project cards.
 */
export function IndexBadge({ index, className = "" }) {
  return (
    <span
      className={`inline-flex h-6 min-w-[2rem] items-center justify-center border border-border px-1.5 font-mono text-xs leading-none text-muted-foreground ${className}`}
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  )
}

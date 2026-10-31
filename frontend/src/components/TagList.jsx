/**
 * Wrapped list of small monospace chips (skills, tech stacks).
 */
export function TagList({ tags, className = "", label }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label={label}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="border border-border bg-background px-2.5 py-1 font-mono text-xs leading-tight text-foreground/90"
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

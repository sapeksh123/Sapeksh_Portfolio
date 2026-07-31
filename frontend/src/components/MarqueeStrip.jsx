/**
 * Pure-CSS infinite horizontal scroll of dot-separated uppercase monospace tags.
 * Tag list is rendered twice back-to-back so the loop is seamless at the halfway point.
 */
export function MarqueeStrip({ tags }) {
  const track = (
    <div className="flex gap-8 shrink-0 pr-8">
      {tags.map((tag, i) => (
        <span key={i} className="flex items-center gap-8 font-mono uppercase text-sm tracking-wide text-muted-foreground">
          {tag}
          <span className="text-primary" aria-hidden="true">•</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee">
        {track}
        {track}
      </div>
    </div>
  )
}

import { cn } from "../lib/utils"

/**
 * Vertical timeline: a 1px rule on the left with a 12px square marker centred on it per item.
 * Marker offset = -(left padding + 6.5px) so its centre sits on the rule at every breakpoint.
 */
export function Timeline({ children, className = "" }) {
  return (
    <ol className={cn("relative border-l border-border pl-6 sm:pl-10 space-y-10 sm:space-y-12", className)}>
      {children}
    </ol>
  )
}

export function TimelineItem({ children, active = false, markerClassName = "top-2" }) {
  return (
    <li className="relative">
      <span
        aria-hidden="true"
        className={cn(
          "absolute -left-[30.5px] sm:-left-[46.5px] h-3 w-3 border border-primary",
          active ? "bg-primary" : "bg-background",
          markerClassName
        )}
      />
      {children}
    </li>
  )
}

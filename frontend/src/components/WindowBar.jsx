import { cn } from "../lib/utils"

/**
 * Terminal/editor-style title bar used on top of cards. Window dots are hidden on phones
 * so the filename and badges have room.
 */
export function WindowBar({ children, className = "", dots = true }) {
  return (
    <div className={cn("flex min-w-0 items-center gap-2 border-b border-border px-4 py-3 sm:px-6", className)}>
      {dots && (
        <span className="hidden sm:flex items-center gap-1.5 mr-1 shrink-0" aria-hidden="true">
          <span className="h-2.5 w-2.5 border border-border" />
          <span className="h-2.5 w-2.5 border border-border" />
          <span className="h-2.5 w-2.5 border border-border" />
        </span>
      )}
      {children}
    </div>
  )
}

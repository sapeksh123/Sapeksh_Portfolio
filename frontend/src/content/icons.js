/**
 * Maps icon name strings (from content) to Lucide React components.
 * Add new icons here when adding content that references them.
 */
import {
  User,
  Heart,
  GraduationCap,
  MapPin,
  Code,
  Code2,
  Database,
  Palette,
  Server,
  Wrench,
  Terminal,
  Leaf,
  Cloud,
  PenTool,
  MessageSquare,
  ShoppingCart,
  Layers,
  Mail,
  Github,
  Linkedin,
  Briefcase,
  Building2,
  Phone,
  Smartphone,
  Network,
  Boxes,
  CalendarCheck,
} from "lucide-react"

export const iconMap = {
  User,
  Heart,
  GraduationCap,
  MapPin,
  Code,
  Code2,
  Database,
  Palette,
  Server,
  Wrench,
  Terminal,
  Leaf,
  Cloud,
  PenTool,
  MessageSquare,
  ShoppingCart,
  Layers,
  Mail,
  Github,
  Linkedin,
  Briefcase,
  Building2,
  Phone,
  Smartphone,
  Network,
  Boxes,
  CalendarCheck,
}

export function getIcon(name) {
  return iconMap[name] ?? null
}

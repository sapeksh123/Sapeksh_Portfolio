import { createContext, useContext } from "react"

export const THEME_STORAGE_KEY = "theme"
export const THEME_COLORS = { dark: "#0d0d0d", light: "#f9f8f6" }

export const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

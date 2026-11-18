import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const isTheme = (value: string | null): value is Theme => value === 'light' || value === 'dark'

const readTheme = (): Theme => {
  const stored = document.documentElement.dataset.theme ?? null
  return isTheme(stored) ? stored : 'dark'
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme

    try {
      window.localStorage.setItem('rzid.theme', theme)
    } catch {
      // Storage can be unavailable; the in-memory theme still works.
    }
  }, [theme])

  const toggle = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return { theme, toggle }
}

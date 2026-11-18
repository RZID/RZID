import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const storageKey = 'rzid.theme'

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
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)')

    const onChange = (event: MediaQueryListEvent) => {
      let stored: string | null = null

      try {
        stored = window.localStorage.getItem(storageKey)
      } catch {
        // Storage can be unavailable; follow the system in that case.
      }

      if (!isTheme(stored)) {
        setTheme(event.matches ? 'light' : 'dark')
      }
    }

    media.addEventListener('change', onChange)

    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'

    try {
      window.localStorage.setItem(storageKey, next)
    } catch {
      // Storage can be unavailable; the in-memory theme still works.
    }

    setTheme(next)
  }

  return { theme, toggle }
}

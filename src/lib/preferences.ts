import type { ThemePreference } from '@/lib/boundary/preferences'
import type { Locale } from '@/types/content'

export const applyTheme = (theme: ThemePreference): void => {
  const root = document.documentElement
  if (theme === 'system') {
    root.removeAttribute('data-theme')
    return
  }
  root.dataset.theme = theme
}

export const applyLocale = (locale: Locale): void => {
  document.documentElement.lang = locale
}

import { createContext, useContext } from 'react'
import type { ThemePreference } from '@/lib/boundary/preferences'
import type { Locale } from '@/types/content'

export type Preferences = {
  theme: ThemePreference
  locale: Locale
  setTheme: (theme: ThemePreference) => void
  setLocale: (locale: Locale) => void
}

export const PreferencesContext = createContext<Preferences | null>(null)

export const usePreferences = (): Preferences => {
  const preferences = useContext(PreferencesContext)
  if (preferences === null) {
    throw new Error('usePreferences must be used inside PreferencesProvider')
  }
  return preferences
}

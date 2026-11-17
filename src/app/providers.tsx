import { useMemo, useState, type ReactNode } from 'react'
import { PreferencesContext, type Preferences } from '@/hooks/use-preferences'
import {
  readStoredLocale,
  readStoredTheme,
  writeStoredLocale,
  writeStoredTheme,
} from '@/lib/boundary/preferences'
import { applyLocale, applyTheme } from '@/lib/preferences'

type PreferencesProviderProps = {
  children: ReactNode
}

export const PreferencesProvider = ({ children }: PreferencesProviderProps) => {
  const [theme, setThemeState] = useState(readStoredTheme)
  const [locale, setLocaleState] = useState(readStoredLocale)

  const value = useMemo<Preferences>(
    () => ({
      theme,
      locale,
      setTheme: (nextTheme) => {
        setThemeState(nextTheme)
        writeStoredTheme(nextTheme)
        applyTheme(nextTheme)
      },
      setLocale: (nextLocale) => {
        setLocaleState(nextLocale)
        writeStoredLocale(nextLocale)
        applyLocale(nextLocale)
      },
    }),
    [theme, locale],
  )

  return <PreferencesContext value={value}>{children}</PreferencesContext>
}

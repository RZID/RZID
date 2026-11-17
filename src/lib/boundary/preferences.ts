import type { Locale } from '@/types/content'

export const themePreferences = ['system', 'light', 'dark'] as const
export type ThemePreference = (typeof themePreferences)[number]

const themeStorageKey = 'rzid.theme'
const localeStorageKey = 'rzid.locale'

// Keep these checks in sync with the pre-paint bootstrap in index.html.
export const parseThemePreference = (value: unknown): ThemePreference | null => {
  if (value === 'system' || value === 'light' || value === 'dark') {
    return value
  }
  return null
}

export const parseLocale = (value: unknown): Locale | null => {
  if (value === 'en' || value === 'id') {
    return value
  }
  return null
}

export const readStoredTheme = (): ThemePreference => {
  try {
    return parseThemePreference(window.localStorage.getItem(themeStorageKey)) ?? 'system'
  } catch {
    return 'system'
  }
}

export const readStoredLocale = (): Locale => {
  try {
    return parseLocale(window.localStorage.getItem(localeStorageKey)) ?? 'en'
  } catch {
    return 'en'
  }
}

export const writeStoredTheme = (theme: ThemePreference): void => {
  try {
    window.localStorage.setItem(themeStorageKey, theme)
  } catch {
    // Storage can be unavailable; the in-memory preference still applies.
  }
}

export const writeStoredLocale = (locale: Locale): void => {
  try {
    window.localStorage.setItem(localeStorageKey, locale)
  } catch {
    // Storage can be unavailable; the in-memory preference still applies.
  }
}

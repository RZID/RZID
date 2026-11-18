import { useSyncExternalStore } from 'react'
import type { Locale, Localized } from '@/types/content'

const storageKey = 'rzid.locale'
const listeners = new Set<() => void>()

const readLocale = (): Locale => {
  try {
    const stored = window.localStorage.getItem(storageKey)

    if (stored === 'id' || stored === 'en') {
      return stored
    }
  } catch {
    // Storage can be unavailable; the document language is the fallback.
  }

  return document.documentElement.lang === 'id' ? 'id' : 'en'
}

let current: Locale = readLocale()

const subscribe = (listener: () => void) => {
  listeners.add(listener)

  return () => {
    listeners.delete(listener)
  }
}

const getSnapshot = () => current

export const setLocale = (next: Locale) => {
  if (next === current) {
    return
  }

  current = next
  document.documentElement.lang = next

  try {
    window.localStorage.setItem(storageKey, next)
  } catch {
    // Storage can be unavailable; the in-memory locale still works.
  }

  for (const listener of listeners) {
    listener()
  }
}

export const useLocale = () => useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

export const useT = () => {
  const locale = useLocale()

  return (value: Localized) => value[locale]
}

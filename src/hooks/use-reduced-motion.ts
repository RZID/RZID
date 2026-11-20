import { useSyncExternalStore } from 'react'

const query = '(prefers-reduced-motion: reduce)'
const media = window.matchMedia(query)
const listeners = new Set<() => void>()
let subscribed = false

const notify = () => {
  for (const listener of listeners) {
    listener()
  }
}

const subscribe = (listener: () => void) => {
  listeners.add(listener)

  if (!subscribed) {
    media.addEventListener('change', notify)
    subscribed = true
  }

  return () => {
    listeners.delete(listener)

    if (listeners.size === 0 && subscribed) {
      media.removeEventListener('change', notify)
      subscribed = false
    }
  }
}

const getSnapshot = () => media.matches

export const useReducedMotion = () => useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

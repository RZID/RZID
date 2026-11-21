const storageKey = 'rzid.boot'

export const shouldShowBoot = () => {
  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.location.hash !== ''
  ) {
    return false
  }

  if (new URLSearchParams(window.location.search).get('intro') === '1') {
    return true
  }

  try {
    return window.sessionStorage.getItem(storageKey) !== 'done'
  } catch {
    return true
  }
}

export const markBootDone = () => {
  try {
    window.sessionStorage.setItem(storageKey, 'done')
  } catch {
    // Storage can be unavailable; the gate still closes.
  }
}

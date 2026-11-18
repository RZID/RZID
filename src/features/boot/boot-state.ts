const storageKey = 'rzid.boot'

export const shouldSkipBoot = () => {
  const requested = new URLSearchParams(window.location.search).get('intro') === '1'

  if (!requested || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return true
  }

  try {
    return window.sessionStorage.getItem(storageKey) === 'done'
  } catch {
    return false
  }
}

export const markBootDone = () => {
  try {
    window.sessionStorage.setItem(storageKey, 'done')
  } catch {
    // Storage can be unavailable; the boot gate still closes.
  }
}

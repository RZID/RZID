const duration = 640
let activeFrame = 0

export const smoothScrollTo = (id: string, reduced: boolean) => {
  const element = document.getElementById(id)

  if (element === null) {
    return
  }

  const padding = Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)
  const target = element.getBoundingClientRect().top + window.scrollY - (padding || 0)
  const start = window.scrollY
  const distance = target - start

  if (activeFrame !== 0) {
    window.cancelAnimationFrame(activeFrame)
    activeFrame = 0
  }

  window.history.replaceState(null, '', `#${id}`)

  if (reduced || Math.abs(distance) < 2) {
    window.scrollTo(0, target)
    return
  }

  const startedAt = performance.now()

  const step = (time: number) => {
    const progress = Math.min(1, (time - startedAt) / duration)
    const stepped = Math.round(progress * 8) / 8
    window.scrollTo(0, start + distance * stepped)

    if (progress < 1) {
      activeFrame = window.requestAnimationFrame(step)
    } else {
      activeFrame = 0
    }
  }

  activeFrame = window.requestAnimationFrame(step)
}

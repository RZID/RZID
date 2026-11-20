import { useEffect } from 'react'
import type { NavItem } from '@/types/content'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { isProgrammaticScroll, smoothScrollTo } from '@/lib/smooth-scroll'

export const useScrollHash = (items: readonly NavItem[]) => {
  const reduced = useReducedMotion()

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null)

    let current = window.location.hash.slice(1)
    let lastHandled = current

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll()) {
          return
        }

        for (const entry of entries) {
          const id = entry.target.id

          if (entry.isIntersecting && id !== current) {
            current = id
            window.history.replaceState(null, '', `#${id}`)
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    for (const section of sections) {
      observer.observe(section)
    }

    const onHashChange = () => {
      const id = window.location.hash.slice(1)

      if (id === '' || id === lastHandled || document.getElementById(id) === null) {
        return
      }

      lastHandled = id
      current = id
      smoothScrollTo(id, reduced)
    }

    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('popstate', onHashChange)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('popstate', onHashChange)
    }
  }, [items, reduced])
}

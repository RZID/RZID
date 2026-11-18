import { useEffect } from 'react'
import type { NavItem } from '@/types/content'

const editableTags: readonly string[] = ['INPUT', 'TEXTAREA', 'SELECT']

export const useSectionHotkeys = (items: readonly NavItem[]) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) {
        return
      }

      const target = event.target

      if (
        target instanceof HTMLElement &&
        (target.isContentEditable || editableTags.includes(target.tagName))
      ) {
        return
      }

      const item = items[Number(event.key) - 1]

      if (item === undefined) {
        return
      }

      document.getElementById(item.id)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      })
      window.history.replaceState(null, '', `#${item.id}`)
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [items])
}

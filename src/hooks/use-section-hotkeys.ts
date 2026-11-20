import { useEffect } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { smoothScrollTo } from '@/lib/smooth-scroll'
import type { NavItem } from '@/types/content'

const editableTags: readonly string[] = ['INPUT', 'TEXTAREA', 'SELECT']

export const useSectionHotkeys = (items: readonly NavItem[]) => {
  const reduced = useReducedMotion()

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!event.altKey || event.metaKey || event.ctrlKey || event.repeat) {
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

      event.preventDefault()
      smoothScrollTo(item.id, reduced)
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [items, reduced])
}

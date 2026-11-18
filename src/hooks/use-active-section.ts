import { useEffect, useState } from 'react'
import type { NavItem } from '@/types/content'

export const useActiveSection = (items: readonly NavItem[]) => {
  const [active, setActive] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    for (const section of sections) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [items])

  return active
}

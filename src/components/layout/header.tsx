import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/container'
import { LocaleToggle } from '@/components/ui/locale-toggle'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { navLabels, uiLabels } from '@/content/site'
import { profile } from '@/content/profile'
import { usePreferences } from '@/hooks/use-preferences'
import { cn } from '@/lib/cn'
import { pickLocalized } from '@/lib/locale'
import type { LocalizedText } from '@/types/content'

type NavItem = {
  href: string
  label: LocalizedText
}

const navItems: readonly NavItem[] = [
  { href: '#work', label: navLabels.work },
  { href: '#experience', label: navLabels.experience },
  { href: '#contact', label: navLabels.contact },
]

export const Header = () => {
  const { locale } = usePreferences()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header className="border-b border-line">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-control focus:bg-surface focus:px-4 focus:py-2 focus:text-small focus:text-foreground focus:shadow-card"
      >
        {pickLocalized(uiLabels.skipToContent, locale)}
      </a>
      <Container className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-4 py-4 lg:grid-cols-[auto_1fr_auto] lg:py-5">
        <a
          href="#top"
          className="font-serif text-2xl leading-none tracking-tight transition-colors duration-fast hover:text-accent-text"
        >
          {profile.name}
        </a>
        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="min-h-11 rounded-control border border-line px-3 text-micro tracking-label text-muted uppercase transition-colors duration-fast hover:text-foreground lg:hidden"
        >
          {pickLocalized(menuOpen ? navLabels.close : navLabels.menu, locale)}
        </button>
        <div
          id="site-menu"
          className={cn(
            'col-span-2 flex-col gap-4 border-t border-line pt-4 lg:col-span-1 lg:contents',
            menuOpen ? 'flex' : 'hidden',
          )}
        >
          <nav
            aria-label={pickLocalized(uiLabels.primaryNav, locale)}
            className="lg:col-start-2 lg:justify-self-center"
          >
            <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="inline-flex min-h-11 items-center text-micro tracking-label text-muted uppercase transition-colors duration-fast hover:text-foreground lg:min-h-0"
                  >
                    {pickLocalized(item.label, locale)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-wrap items-center gap-2 lg:col-start-3 lg:justify-self-end">
            <ThemeToggle />
            <LocaleToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}

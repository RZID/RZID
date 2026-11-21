import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from 'react'
import { PixelAvatar } from '@/components/ui/pixel-avatar'
import { profile } from '@/content/profile'
import { nav, ui } from '@/content/site'
import { useActiveSection } from '@/hooks/use-active-section'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/lib/cn'
import { setLocale, useLocale, useT } from '@/lib/locale'
import { smoothScrollTo } from '@/lib/smooth-scroll'

export const Header = () => {
  const active = useActiveSection(nav)
  const { theme, toggle } = useTheme()
  const locale = useLocale()
  const t = useT()
  const reduced = useReducedMotion()
  const barRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const menuCloseRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [themeWipe, setThemeWipe] = useState<{ id: number; x: number; y: number } | null>(null)
  const [languageSwap, setLanguageSwap] = useState<{ id: number; label: string } | null>(null)
  const wipeId = useRef(0)
  const wipeTimer = useRef(0)
  const swapId = useRef(0)
  const swapTimer = useRef(0)

  useEffect(() => {
    const bar = barRef.current

    if (bar === null) {
      return
    }

    // The global reduced-motion rule kills CSS animations, so the bar needs the JS path there.
    if (!reduced && typeof CSS !== 'undefined' && CSS.supports('animation-timeline: scroll()')) {
      return
    }

    bar.classList.add('xp-bar-fallback')

    const update = () => {
      const documentElement = document.documentElement
      const maximum = documentElement.scrollHeight - window.innerHeight
      const progress = maximum > 0 ? window.scrollY / maximum : 0
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`
    }

    let frame = 0

    const schedule = () => {
      if (frame !== 0) {
        return
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0
        update()
      })
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      bar.classList.remove('xp-bar-fallback')
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [reduced])

  useEffect(
    () => () => {
      window.clearTimeout(wipeTimer.current)
      window.clearTimeout(swapTimer.current)
    },
    [],
  )

  const handleLanguageToggle = () => {
    const next = locale === 'id' ? 'en' : 'id'

    if (reduced) {
      setLocale(next)
      return
    }

    swapId.current += 1
    setLanguageSwap({
      id: swapId.current,
      label: next === 'id' ? t(ui.indonesianShort) : t(ui.englishShort),
    })
    window.clearTimeout(swapTimer.current)
    swapTimer.current = window.setTimeout(() => setLocale(next), 320)
  }

  const handleThemeToggle = (event: MouseEvent<HTMLButtonElement>) => {
    if (reduced) {
      toggle()
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()

    wipeId.current += 1
    setThemeWipe({
      id: wipeId.current,
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    })
    window.clearTimeout(wipeTimer.current)
    wipeTimer.current = window.setTimeout(toggle, 320)
  }

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    menuCloseRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    const onPointerDown = (event: PointerEvent) => {
      const header = headerRef.current

      if (header !== null && event.target instanceof Node && !header.contains(event.target)) {
        closeMenu()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointerdown', onPointerDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [closeMenu, menuOpen])

  const wipeStyle: CSSProperties & Record<'--wipe-x' | '--wipe-y', string> = {
    '--wipe-x': `${themeWipe?.x ?? 0}px`,
    '--wipe-y': `${themeWipe?.y ?? 0}px`,
  }

  const navLink = (item: (typeof nav)[number], stacked = false) => {
    const isActive = active === item.id

    return (
      <a
        key={item.id}
        href={`#${item.id}`}
        onClick={(event) => {
          event.preventDefault()
          smoothScrollTo(item.id, reduced)
          closeMenu()
        }}
        aria-current={isActive ? 'location' : undefined}
        className={cn(
          'group inline-flex items-center font-pixel text-label',
          stacked ? 'min-h-12 w-full gap-1 border-l-4 px-3 py-2 text-lead' : 'px-2 py-1',
          isActive
            ? cn('text-accent-text', stacked && 'border-accent-text bg-panel')
            : cn('hover:text-accent-text', stacked && 'border-transparent hover:bg-panel'),
        )}
      >
        <span
          aria-hidden
          className={cn(
            'inline-block w-3 text-accent-text',
            isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
          )}
        >
          ▶
        </span>
        {t(item.label)}
      </a>
    )
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b-4 border-ink bg-page">
      <div className="mx-auto flex h-13 max-w-content items-center justify-between gap-2 px-4">
        <div
          ref={barRef}
          aria-hidden
          className="xp-bar absolute inset-x-0 bottom-0 h-1 origin-left bg-accent"
        />
        <a href="#home" className="font-pixel text-label font-bold whitespace-nowrap">
          {profile.name}{' '}
          <small className="hidden font-pixel text-label font-normal text-muted sm:inline">
            {t(profile.role)}
          </small>
        </a>

        <nav aria-label={t(ui.primaryNav)} className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => navLink(item))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            ref={menuButtonRef}
            aria-label={menuOpen ? t(ui.closeMenu) : t(ui.menu)}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-9 cursor-pointer items-center gap-1.5 border-2 border-ink px-2 font-pixel text-label lg:hidden"
          >
            <span aria-hidden className="inline-flex flex-col gap-0.5">
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
              <span className="block h-0.5 w-4 bg-current" />
            </span>
            {menuOpen ? t(ui.closeMenu) : t(ui.menu)}
          </button>
          <button
            type="button"
            onClick={handleLanguageToggle}
            aria-label={locale === 'id' ? t(ui.switchToEnglish) : t(ui.switchToIndonesian)}
            className="flex size-9 cursor-pointer items-center justify-center border-2 border-ink font-pixel text-label"
          >
            {locale === 'id' ? t(ui.englishShort) : t(ui.indonesianShort)}
          </button>
          <button
            type="button"
            onClick={handleThemeToggle}
            aria-label={t(ui.themeToggle)}
            className="flex size-9 cursor-pointer items-center justify-center border-2 border-ink font-pixel text-label"
          >
            {theme === 'light' ? '☀' : '☾'}
          </button>
        </div>
      </div>

      <div
        className="sidebar-root fixed inset-0 z-50 lg:hidden"
        data-open={menuOpen}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <button
          type="button"
          aria-label={t(ui.closeMenu)}
          onClick={closeMenu}
          className="sidebar-scrim absolute inset-0 cursor-pointer bg-shadow/80"
        />
        <aside
          id="mobile-menu"
          aria-label={t(ui.primaryNav)}
          className="sidebar-panel absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col border-r-4 border-ink bg-panel shadow-hard-lg"
        >
          <div className="flex h-13 items-center justify-between border-b-4 border-ink px-4">
            <span className="flex items-center gap-2">
              <span aria-hidden>
                <PixelAvatar className="h-8 w-auto" />
              </span>
              <span className="font-pixel text-lead font-bold">{t(ui.menu)}</span>
            </span>
            <button
              ref={menuCloseRef}
              type="button"
              aria-label={t(ui.closeMenu)}
              onClick={closeMenu}
              className="flex size-9 cursor-pointer items-center justify-center border-2 border-ink font-pixel text-label"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 p-3">
            {nav.map((item) => navLink(item, true))}
          </nav>
          <p className="border-t-4 border-ink px-4 py-3 font-pixel text-label text-muted">
            {t(ui.menuHint)}
          </p>
        </aside>
      </div>

      {!reduced && themeWipe !== null ? (
        <div key={themeWipe.id} aria-hidden className="theme-wipe" style={wipeStyle}>
          <span
            className="theme-wipe__band theme-wipe__core"
            onAnimationEnd={() => setThemeWipe(null)}
          />
          <span className="theme-wipe__band theme-wipe__echo" />
        </div>
      ) : null}

      {!reduced && languageSwap !== null ? (
        <div key={languageSwap.id} aria-hidden className="lang-slices">
          <span className="lang-slices__band lang-slices__band--a" />
          <span className="lang-slices__band lang-slices__band--b" />
          <span className="lang-slices__band lang-slices__band--c" />
          <span className="lang-slices__band lang-slices__band--d" />
          <span className="lang-slices__label" onAnimationEnd={() => setLanguageSwap(null)}>
            {languageSwap.label}
          </span>
        </div>
      ) : null}
    </header>
  )
}

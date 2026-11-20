import { useEffect, useRef } from 'react'
import { profile } from '@/content/profile'
import { nav, ui } from '@/content/site'
import { useActiveSection } from '@/hooks/use-active-section'
import { useTheme } from '@/hooks/use-theme'
import { cn } from '@/lib/cn'
import { setLocale, useLocale, useT } from '@/lib/locale'

export const Header = () => {
  const active = useActiveSection(nav)
  const { theme, toggle } = useTheme()
  const locale = useLocale()
  const t = useT()
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current

    if (bar === null) {
      return
    }

    if (typeof CSS !== 'undefined' && CSS.supports('animation-timeline: scroll()')) {
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
  }, [])

  return (
    <header className="relative sticky top-0 z-40 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b-4 border-ink bg-page px-4 py-2">
      <div
        ref={barRef}
        aria-hidden
        className="xp-bar absolute inset-x-0 bottom-0 h-1 origin-left bg-accent"
      />
      <a href="#home" className="font-pixel text-base font-bold whitespace-nowrap">
        {profile.name}{' '}
        <small className="hidden font-sans text-xs font-normal text-muted sm:inline">
          {t(profile.role)}
        </small>
      </a>

      <nav aria-label={t(ui.primaryNav)} className="flex flex-wrap gap-0.5">
        {nav.map((item) => {
          const isActive = active === item.id

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? 'location' : undefined}
              className={cn(
                'group inline-flex items-center px-2 py-1 font-pixel text-sm',
                isActive ? 'text-accent' : 'hover:text-accent',
              )}
            >
              <span
                aria-hidden
                className={cn(
                  'inline-block w-3 text-accent',
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
                )}
              >
                ▶
              </span>
              {t(item.label)}
            </a>
          )
        })}
      </nav>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setLocale(locale === 'id' ? 'en' : 'id')}
          aria-label={t(ui.language)}
          className="flex size-9 cursor-pointer items-center justify-center border-2 border-ink font-pixel text-sm"
        >
          {locale === 'id' ? t(ui.englishShort) : t(ui.indonesianShort)}
        </button>
        <button
          type="button"
          onClick={toggle}
          aria-label={t(ui.themeToggle)}
          className="flex size-9 cursor-pointer items-center justify-center border-2 border-ink font-pixel text-base"
        >
          {theme === 'light' ? '☀' : '☾'}
        </button>
      </div>
    </header>
  )
}

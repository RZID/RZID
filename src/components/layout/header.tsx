import { Container } from '@/components/ui/container'
import { LocaleToggle } from '@/components/ui/locale-toggle'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { profile } from '@/content/profile'
import { usePreferences } from '@/hooks/use-preferences'
import { pickLocalized } from '@/lib/locale'

export const Header = () => {
  const { locale } = usePreferences()

  return (
    <header className="border-b border-line">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-5">
        <a
          href="/"
          className="font-serif text-2xl leading-none tracking-tight hover:text-accent-text"
        >
          {profile.name}
        </a>
        <div className="flex flex-wrap items-center gap-2">
          <ThemeToggle />
          <LocaleToggle />
        </div>
        <p className="text-small text-muted">{pickLocalized(profile.role, locale)}</p>
      </Container>
    </header>
  )
}

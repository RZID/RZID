import { Container } from '@/components/ui/container'
import { TextLink } from '@/components/ui/text-link'
import { profile } from '@/content/profile'
import { usePreferences } from '@/hooks/use-preferences'
import { pickLocalized } from '@/lib/locale'
import type { ProfileLink } from '@/types/content'

const links: readonly ProfileLink[] = [
  profile.links.github,
  profile.links.email,
  profile.links.linkedin,
]

export const Footer = () => {
  const { locale } = usePreferences()

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-line">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-small text-muted">
          {profile.name} · {pickLocalized(profile.location, locale)}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-small">
          {links.map((link) => (
            <li key={link.label.en}>
              <TextLink href={link.href}>{pickLocalized(link.label, locale)}</TextLink>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  )
}

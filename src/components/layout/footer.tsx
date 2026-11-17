import { Container } from '@/components/ui/container'
import { TextLink } from '@/components/ui/text-link'
import { profile } from '@/content/profile'
import type { ProfileLink } from '@/types/content'

const links: readonly ProfileLink[] = [
  profile.links.github,
  profile.links.email,
  profile.links.linkedin,
]

export const Footer = () => (
  <footer className="border-t border-foreground/10">
    <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-foreground/70">
        {profile.name} · {profile.location.en}
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {links.map((link) => (
          <li key={link.label.en}>
            <TextLink href={link.href}>{link.label.en}</TextLink>
          </li>
        ))}
      </ul>
    </Container>
  </footer>
)

import { Container } from '@/components/ui/container'
import { profile } from '@/content/profile'

export const Header = () => (
  <header className="border-b border-foreground/10">
    <Container className="flex items-baseline justify-between gap-6 py-6">
      <a
        href="/"
        className="font-serif text-2xl leading-none tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        {profile.name}
      </a>
      <p className="text-sm text-foreground/70">{profile.role.en}</p>
    </Container>
  </header>
)

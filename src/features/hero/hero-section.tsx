import { Section } from '@/components/layout/section'
import { Box } from '@/components/ui/box'
import { ButtonLink } from '@/components/ui/button-link'
import { PixelAvatar } from '@/components/ui/pixel-avatar'
import { Reveal } from '@/components/ui/reveal'
import { profile } from '@/content/profile'
import { hero, sections } from '@/content/site'
import { useT } from '@/lib/locale'

export const HeroSection = () => {
  const t = useT()

  return (
    <Section
      id="home"
      className="grid grid-cols-1 gap-8 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.25fr_0.75fr] lg:items-center"
    >
      <Reveal>
        <p className="m-0 font-pixel text-lg text-muted">
          {t(hero.player)} · {t(profile.role)}
        </p>
        <h1 className="my-2 font-pixel text-hero leading-none text-shadow-hard">{hero.name}</h1>
        <p className="mt-2 mb-5 font-pixel text-mint">{t(sections.contact.availability)}</p>

        <Box className="px-4 py-4 text-lg">
          <p className="m-0">{t(profile.summary)}</p>
        </Box>

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={hero.primaryCta.href}>{t(hero.primaryCta.label)}</ButtonLink>
          <ButtonLink href={profile.links.email.href} variant="secondary">
            {t(profile.links.email.label)}
          </ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="secondary">
            {t(hero.secondaryCta.label)}
          </ButtonLink>
        </div>
      </Reveal>

      <Reveal className="order-first grid place-items-center lg:order-none">
        <PixelAvatar className="w-[min(210px,52vw)] animate-bob" />
        <div aria-hidden className="mt-2 h-3.5 w-40 bg-ink/25" />
      </Reveal>
    </Section>
  )
}

import { Section } from '@/components/layout/section'
import { Box } from '@/components/ui/box'
import { ButtonLink } from '@/components/ui/button-link'
import { PixelAvatar } from '@/components/ui/pixel-avatar'
import { Reveal } from '@/components/ui/reveal'
import { hero, ui } from '@/content/site'
import { useTypewriter } from '@/hooks/use-typewriter'

export const HeroSection = () => {
  const instant = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const { text, done, finish } = useTypewriter(hero.dialogue, instant)

  return (
    <Section
      id="home"
      className="lg:grid lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-8"
    >
      <Reveal>
        <p className="m-0 font-pixel text-lg text-muted">{hero.player}</p>
        <h1 className="my-2 font-pixel text-hero leading-none text-shadow-hard">{hero.name}</h1>

        <Box className="relative min-h-34 px-4 py-4 text-lg whitespace-pre-line">
          <p aria-hidden="true">{text}</p>
          <button
            type="button"
            onClick={finish}
            aria-label={ui.dialogueSkip}
            className="absolute inset-0 cursor-pointer"
          />
          {done ? null : (
            <span aria-hidden className="absolute right-3 bottom-1 text-accent">
              ▼
            </span>
          )}
        </Box>
        <p className="sr-only">{hero.dialogue.join(' ')}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>
      </Reveal>

      <Reveal className="order-first place-items-center lg:order-none lg:grid">
        <PixelAvatar className="w-[min(210px,52vw)] animate-bob" />
        <div aria-hidden className="mt-2 h-3.5 w-40 bg-ink/25" />
      </Reveal>
    </Section>
  )
}

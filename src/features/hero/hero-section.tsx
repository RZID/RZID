import { useMemo } from 'react'
import { Section } from '@/components/layout/section'
import { Box } from '@/components/ui/box'
import { ButtonLink } from '@/components/ui/button-link'
import { PixelAvatar } from '@/components/ui/pixel-avatar'
import { Reveal } from '@/components/ui/reveal'
import { profile } from '@/content/profile'
import { hero, ui } from '@/content/site'
import { useTypewriter } from '@/hooks/use-typewriter'
import { useLocale, useT } from '@/lib/locale'

export const HeroSection = () => {
  const locale = useLocale()
  const t = useT()
  const lines = useMemo(() => hero.dialogue.map((line) => line[locale]), [locale])
  const instant = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const { text, done, finish } = useTypewriter(lines, instant)

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

        <Box className="relative min-h-34 px-4 py-4 text-lg whitespace-pre-line">
          <p aria-hidden="true">{text}</p>
          <button
            type="button"
            onClick={finish}
            aria-label={t(ui.dialogueSkip)}
            className="absolute inset-0 cursor-pointer"
          />
          {done ? null : (
            <span aria-hidden className="absolute right-3 bottom-1 text-accent">
              ▼
            </span>
          )}
        </Box>
        <p className="sr-only">{lines.join(' ')}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={hero.primaryCta.href}>{t(hero.primaryCta.label)}</ButtonLink>
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

import { useMemo } from 'react'
import { Section } from '@/components/layout/section'
import { Box } from '@/components/ui/box'
import { ButtonLink } from '@/components/ui/button-link'
import { PixelAvatar } from '@/components/ui/pixel-avatar'
import { Reveal } from '@/components/ui/reveal'
import { profile } from '@/content/profile'
import { hero, sections, ui } from '@/content/site'
import { useTypewriter } from '@/hooks/use-typewriter'
import { useLocale, useT } from '@/lib/locale'

type ChatDialogueProps = {
  lines: readonly string[]
  instant: boolean
}

const ChatDialogue = ({ lines, instant }: ChatDialogueProps) => {
  const t = useT()
  const { text, done, finish, replay } = useTypewriter(lines, instant)

  return (
    <Box className="relative min-h-28 px-4 py-4 text-lg whitespace-pre-line">
      <p aria-hidden="true">
        {text}
        {done ? null : <span className="animate-blink">▌</span>}
      </p>
      <button
        type="button"
        onClick={finish}
        aria-label={t(ui.dialogueSkip)}
        className="absolute inset-0 cursor-pointer"
      />
      {done ? (
        <button
          type="button"
          onClick={replay}
          aria-label={t(ui.replayDialogue)}
          className="absolute right-3 bottom-2 z-10 cursor-pointer font-pixel text-sm text-mint underline"
        >
          ↻
        </button>
      ) : null}
    </Box>
  )
}

export const HeroSection = () => {
  const locale = useLocale()
  const t = useT()
  const lines = useMemo(() => hero.dialogue.map((line) => line[locale]), [locale])
  const instant = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <Section
      id="home"
      className="grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center"
    >
      <Reveal>
        <p className="m-0 font-pixel text-lg text-muted">
          {t(profile.location)} · {t(profile.role)}
        </p>
        <h1 className="my-2 font-pixel text-hero leading-none text-shadow-hard">{hero.name}</h1>
        <p className="mt-2 mb-5 font-pixel text-mint">{t(sections.contact.availability)}</p>

        <ChatDialogue key={locale} lines={lines} instant={instant} />
        <p className="sr-only">{t(profile.summary)}</p>

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

      <Reveal className="col-span-full grid gap-4 border-t-4 border-ink pt-5 sm:grid-cols-3">
        {hero.stats.map((stat) => (
          <div key={stat.label.id} className="border-l-4 border-accent pl-3">
            <p className="m-0 font-pixel text-sm text-muted">{t(stat.label)}</p>
            <p className="m-0 text-base">{t(stat.value)}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}

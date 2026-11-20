import { useEffect, useMemo, useState } from 'react'
import { Section } from '@/components/layout/section'
import { Box } from '@/components/ui/box'
import { ButtonLink } from '@/components/ui/button-link'
import { PixelAvatar } from '@/components/ui/pixel-avatar'
import { Reveal } from '@/components/ui/reveal'
import { profile } from '@/content/profile'
import { hero, sections, ui } from '@/content/site'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { useTypewriter } from '@/hooks/use-typewriter'
import { cn } from '@/lib/cn'
import { useLocale, useT } from '@/lib/locale'

type ChatDialogueProps = {
  sentences: readonly string[]
  instant: boolean
}

const ChatDialogue = ({ sentences, instant }: ChatDialogueProps) => {
  const t = useT()
  const { text, done, finish, replay } = useTypewriter(sentences, instant)

  useEffect(() => {
    const heroElement = document.getElementById('home')

    if (heroElement === null) {
      return
    }

    heroElement.dataset.talking = done ? 'false' : 'true'

    return () => {
      delete heroElement.dataset.talking
    }
  }, [done])

  return (
    <Box className="relative min-h-24 shrink-0 px-4 py-4 text-meta sm:text-lead">
      <span aria-hidden className="chat-tail chat-tail-down sm:hidden" />
      <span aria-hidden className="chat-tail chat-tail-down-inner sm:hidden" />
      <span aria-hidden className="chat-tail chat-tail-right hidden sm:block" />
      <span aria-hidden className="chat-tail chat-tail-right-inner hidden sm:block" />
      <p aria-hidden="true" className="m-0 break-words whitespace-pre-wrap">
        {text}
        {done ? null : <span className="animate-blink">▌</span>}
      </p>
      <button
        type="button"
        onClick={finish}
        aria-label={t(ui.dialogueSkip)}
        className={cn('absolute inset-0 cursor-pointer', done && 'right-12 bottom-10')}
      />
      {done ? (
        <button
          type="button"
          onClick={replay}
          aria-label={t(ui.replayDialogue)}
          className="absolute right-2 bottom-2 z-10 flex size-7 cursor-pointer items-center justify-center border-2 border-ink bg-panel font-pixel text-lead leading-none text-mint"
        >
          <span aria-hidden>↻</span>
        </button>
      ) : null}
    </Box>
  )
}

export const HeroSection = () => {
  const locale = useLocale()
  const t = useT()
  const sentences = useMemo(() => hero.sentences.map((item) => item[locale]), [locale])
  const slotClass = 'h-52 min-[360px]:h-44 min-[414px]:h-40'
  const reduced = useReducedMotion()
  const [jump, setJump] = useState(0)

  const jumpAvatar = () => {
    if (!reduced) {
      setJump((value) => value + 1)
    }
  }

  return (
    <Section
      id="home"
      className="grid grid-cols-1 gap-y-4 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-x-8 lg:gap-y-6"
    >
      <div className="contents lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col">
        <Reveal className="col-span-full">
          <p className="m-0 font-pixel text-lead text-muted">
            {t(profile.location)} · {t(profile.role)}
          </p>
          <h1 className="my-2 font-pixel text-hero leading-none text-shadow-hard">{hero.name}</h1>
          <p className="mt-2 mb-5 font-pixel text-mint">{t(sections.contact.availability)}</p>
          <p className="sr-only">{t(profile.summary)}</p>
        </Reveal>

        <Reveal className="col-span-full">
          <div className={cn('flex flex-col justify-center', slotClass)}>
            <ChatDialogue key={`${locale}-${reduced}`} sentences={sentences} instant={reduced} />
          </div>
        </Reveal>
      </div>

      <Reveal className="col-span-full grid place-items-center lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <button type="button" onClick={jumpAvatar} aria-label={t(ui.avatarAction)}>
          <div key={jump} className={jump > 0 ? 'animate-jump' : undefined}>
            <span className="avatar-talk block">
              <PixelAvatar className="w-36 animate-bob sm:w-[min(210px,52vw)]" />
            </span>
          </div>
        </button>
        <div aria-hidden className="mt-2 h-3.5 w-36 bg-ink/25 sm:w-40" />
      </Reveal>

      <Reveal className="flex flex-wrap gap-3 lg:col-start-1 lg:row-start-2">
        <ButtonLink href={hero.primaryCta.href}>{t(hero.primaryCta.label)}</ButtonLink>
        <ButtonLink href={profile.links.email.href} variant="secondary">
          {t(profile.links.email.label)}
        </ButtonLink>
        <ButtonLink href={hero.secondaryCta.href} variant="secondary">
          {t(hero.secondaryCta.label)}
        </ButtonLink>
      </Reveal>

      <Reveal className="col-span-full grid gap-4 border-t-4 border-ink pt-5 sm:grid-cols-3">
        {hero.stats.map((stat) => (
          <div key={stat.label.id} className="border-l-4 border-accent pl-3">
            <p className="m-0 font-pixel text-label text-muted">{t(stat.label)}</p>
            <p className="m-0 text-label">{t(stat.value)}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}

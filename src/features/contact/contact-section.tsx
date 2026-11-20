import { Section } from '@/components/layout/section'
import { Box } from '@/components/ui/box'
import { ButtonLink } from '@/components/ui/button-link'
import { Reveal } from '@/components/ui/reveal'
import { profile } from '@/content/profile'
import { sections } from '@/content/site'
import { useT } from '@/lib/locale'

export const ContactSection = () => {
  const t = useT()

  return (
    <Section id="contact">
      <Reveal>
        <Box className="px-5 py-10 text-center sm:px-8">
          <h2 className="font-pixel text-section">{t(sections.contact.title)}</h2>
          <p className="mx-auto mt-3 mb-4 max-w-prose text-muted">{t(sections.contact.summary)}</p>
          <p className="mb-6 font-sans text-mint">{t(sections.contact.availability)}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={profile.links.email.href}>{t(profile.links.email.label)}</ButtonLink>
            <ButtonLink href={profile.links.github.href} variant="secondary">
              {t(profile.links.github.label)}
            </ButtonLink>
            <ButtonLink href={profile.links.linkedin.href} variant="secondary">
              {t(profile.links.linkedin.label)}
            </ButtonLink>
          </div>
        </Box>
      </Reveal>
    </Section>
  )
}

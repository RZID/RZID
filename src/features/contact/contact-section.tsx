import { Section } from '@/components/layout/section'
import { Box } from '@/components/ui/box'
import { ButtonLink } from '@/components/ui/button-link'
import { Reveal } from '@/components/ui/reveal'
import { profile } from '@/content/profile'
import { sections } from '@/content/site'

export const ContactSection = () => (
  <Section id="contact">
    <Reveal>
      <Box className="px-5 py-10 text-center sm:px-8">
        <h2 className="font-pixel text-section">{sections.contact.title}</h2>
        <p className="mx-auto mt-3 mb-4 max-w-prose text-muted">{sections.contact.summary}</p>
        <p className="mb-6 font-pixel text-mint">{sections.contact.availability}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href={profile.links.email.href}>{profile.links.email.label}</ButtonLink>
          <ButtonLink href={profile.links.github.href} variant="secondary">
            {profile.links.github.label}
          </ButtonLink>
          <ButtonLink href={profile.links.linkedin.href} variant="secondary">
            {profile.links.linkedin.label}
          </ButtonLink>
        </div>
      </Box>
    </Reveal>
  </Section>
)

import { Section } from '@/components/layout/section'
import { Box } from '@/components/ui/box'
import { Reveal } from '@/components/ui/reveal'
import { experience } from '@/content/experience'
import { sections } from '@/content/site'
import { useT } from '@/lib/locale'

export const GuildSection = () => {
  const t = useT()

  return (
    <Section id="guild" title={t(sections.guild.title)}>
      <ol className="space-y-4">
        {experience.map((item, index) => (
          <li key={item.org}>
            <Reveal delay={index * 40}>
              <Box className="flex items-start gap-4 p-4">
                <span
                  aria-hidden
                  className="min-w-8 font-pixel text-rank leading-none text-accent-text"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-pixel text-title">{item.org}</h3>
                  <p className="font-body text-body text-muted">
                    {t(item.role)} · {t(item.period)}
                  </p>
                  <p className="mt-1 font-body text-body">{t(item.summary)}</p>
                </div>
              </Box>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

import { Section } from '@/components/layout/section'
import { Box } from '@/components/ui/box'
import { Reveal } from '@/components/ui/reveal'
import { experience } from '@/content/experience'
import { sections } from '@/content/site'
import { useT } from '@/lib/locale'

export const GuildSection = () => {
  const t = useT()

  return (
    <Section id="guild" title={t(sections.guild.title)} lead={t(sections.guild.lead)}>
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
                  <p className="text-body text-muted">
                    {t(item.role)} · {t(item.period)}
                  </p>
                  <p className="mt-1 text-body">{t(item.summary)}</p>
                  <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    {item.highlights.map((highlight) => (
                      <li key={highlight.en} className="text-body text-muted">
                        <span aria-hidden className="mr-1 text-mint">
                          ▸
                        </span>
                        {t(highlight)}
                      </li>
                    ))}
                  </ul>
                </div>
              </Box>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

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
            <Reveal delay={index * 60}>
              <Box className="flex items-start gap-4 p-4">
                <span aria-hidden className="min-w-8 font-pixel text-3xl leading-none text-accent">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-pixel text-xl">{item.org}</h3>
                  <p className="text-base text-muted">
                    {t(item.role)} · {t(item.period)}
                  </p>
                  <p className="mt-1">{t(item.summary)}</p>
                </div>
              </Box>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

import { Section } from '@/components/layout/section'
import { Box } from '@/components/ui/box'
import { Reveal } from '@/components/ui/reveal'
import { experience } from '@/content/experience'
import { sections } from '@/content/site'

export const GuildSection = () => (
  <Section id="guild" title={sections.guild.title}>
    <ol className="space-y-4">
      {experience.map((item, index) => (
        <li key={item.org}>
          <Reveal>
            <Box className="flex items-start gap-4 p-4">
              <span aria-hidden className="min-w-8 font-pixel text-3xl leading-none text-accent">
                {index + 1}
              </span>
              <div>
                <h3 className="font-pixel text-xl">{item.org}</h3>
                <p className="text-sm text-muted">
                  {item.role} · {item.period}
                </p>
                <p className="mt-1">{item.summary}</p>
              </div>
            </Box>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
)

import { Section } from '@/components/layout/section'
import { Box } from '@/components/ui/box'
import { Reveal } from '@/components/ui/reveal'
import { Tag } from '@/components/ui/tag'
import { sections, ui } from '@/content/site'
import { projects } from '@/content/projects'

export const QuestsSection = () => (
  <Section id="quests" title={sections.quests.title} lead={sections.quests.lead}>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Reveal key={project.name} className="h-full">
          <Box
            as="article"
            className="relative h-full p-5 transition-[transform,box-shadow] duration-150 ease-steps-3 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg"
          >
            <span className="absolute top-3 right-3 rotate-3 border-2 border-mint px-1.5 font-pixel text-xs leading-tight text-mint">
              {ui.cleared}
            </span>
            <h3 className="mb-1.5 pr-20 font-pixel text-xl">{project.name}</h3>
            <p className="mb-3 text-sm">{project.summary}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Box>
        </Reveal>
      ))}
    </div>
  </Section>
)

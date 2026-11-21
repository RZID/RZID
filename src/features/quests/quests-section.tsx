import { Section } from '@/components/layout/section'
import { Box } from '@/components/ui/box'
import { Reveal } from '@/components/ui/reveal'
import { Tag } from '@/components/ui/tag'
import { projects } from '@/content/projects'
import { sections } from '@/content/site'
import { ProjectIcon } from '@/features/work'
import { cn } from '@/lib/cn'
import { useT } from '@/lib/locale'

export const QuestsSection = () => {
  const t = useT()

  return (
    <Section id="quests" title={t(sections.quests.title)} lead={t(sections.quests.lead)}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const isWide = index === projects.length - 1

          return (
            <Reveal
              key={project.name}
              delay={index * 40}
              className={cn('h-full', isWide && 'md:col-span-2')}
            >
              <Box
                as="article"
                className={cn(
                  'relative h-full p-5 transition-[transform,box-shadow] duration-(--motion-base) ease-steps-3',
                  'hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg',
                  isWide && 'md:flex md:items-start md:gap-6',
                )}
              >
                <div
                  className={cn(
                    'mb-3 flex items-start justify-between gap-3',
                    isWide && 'md:mb-0 md:w-48 md:shrink-0 md:flex-col md:items-start',
                  )}
                >
                  <ProjectIcon icon={project.icon} />
                  <span className="border-2 border-mint px-1.5 font-pixel text-label leading-tight text-mint">
                    {t(project.role)}
                  </span>
                </div>
                <div className={cn(isWide && 'md:flex-1')}>
                  <h3 className="mb-1.5 font-pixel text-title">{project.name}</h3>
                  <p className="mb-3 font-body text-body">{t(project.summary)}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </Box>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

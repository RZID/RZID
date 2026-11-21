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
                  <p className="mb-2 text-body">{t(project.summary)}</p>
                  <ul className="mb-3 space-y-0.5">
                    {project.highlights.map((highlight) => (
                      <li key={highlight.en} className="text-body text-muted">
                        <span aria-hidden className="mr-1.5 text-mint">
                          ▸
                        </span>
                        {t(highlight)}
                      </li>
                    ))}
                  </ul>
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
      <div className="mt-8 border-t-4 border-ink pt-6">
        <h3 className="font-pixel text-title">{t(sections.quests.decisionsTitle)}</h3>
        <p className="mb-4 text-body text-muted">{t(sections.quests.decisionsLead)}</p>
        <ol className="grid gap-3 sm:grid-cols-2">
          {sections.quests.decisions.map((decision, index) => (
            <li key={decision.en} className="flex gap-3 border-l-4 border-accent pl-3">
              <span aria-hidden className="font-pixel text-mint">
                0{index + 1}
              </span>
              <span className="text-body">{t(decision)}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

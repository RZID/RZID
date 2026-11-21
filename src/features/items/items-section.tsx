import { Section } from '@/components/layout/section'
import { TechIcon } from '@/components/ui/tech-icon'
import { Reveal } from '@/components/ui/reveal'
import { sections } from '@/content/site'
import { skillGroups } from '@/content/skills'
import { cn } from '@/lib/cn'
import { useT } from '@/lib/locale'

export const ItemsSection = () => {
  const t = useT()

  return (
    <Section id="items" title={t(sections.items.title)}>
      <div className="space-y-8">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title.id} delay={groupIndex * 50}>
            <h3 className="mb-3 flex items-center gap-2 font-pixel text-lead text-muted">
              <span aria-hidden className="text-accent-text">
                ▸
              </span>
              {t(group.title)}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item.id}
                  className={cn(
                    'inline-flex min-h-11 items-center gap-2 border-2 border-ink bg-panel px-3 py-2 font-pixel text-label',
                    'transition-transform duration-(--motion-fast) ease-steps hover:-translate-y-1',
                    group.learning === true && 'border-dashed text-muted',
                  )}
                >
                  <TechIcon label={t(item)} />
                  <span className="whitespace-nowrap">{t(item)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

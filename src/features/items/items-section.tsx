import { Section } from '@/components/layout/section'
import { Reveal } from '@/components/ui/reveal'
import { sections } from '@/content/site'
import { skillGroups } from '@/content/skills'
import { cn } from '@/lib/cn'
import { useT } from '@/lib/locale'

export const ItemsSection = () => {
  const t = useT()

  return (
    <Section id="items" title={t(sections.items.title)}>
      <div className="space-y-6">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title.id} delay={groupIndex * 50}>
            <h3 className="mb-2 font-sans text-lead text-muted">{t(group.title)}</h3>
            <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {group.items.map((item) => (
                <li
                  key={item.id}
                  className={cn(
                    'border-2 border-ink bg-panel px-2 py-3 text-center font-sans text-label',
                    'transition-transform duration-(--motion-fast) ease-steps hover:-translate-y-1',
                    group.learning === true && 'border-dashed text-muted',
                  )}
                >
                  {t(item)}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

import { Section } from '@/components/layout/section'
import { Reveal } from '@/components/ui/reveal'
import { sections } from '@/content/site'
import { skillGroups } from '@/content/skills'
import { cn } from '@/lib/cn'

export const ItemsSection = () => (
  <Section id="items" title={sections.items.title}>
    <div className="space-y-6">
      {skillGroups.map((group) => (
        <Reveal key={group.title}>
          <h3 className="mb-2 font-pixel text-lg text-muted">{group.title}</h3>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {group.items.map((item) => (
              <div
                key={item}
                className={cn(
                  'border-2 border-ink bg-panel px-2 py-3 text-center font-pixel text-sm',
                  'transition-transform duration-100 ease-steps hover:-translate-y-1',
                  group.learning === true && 'border-dashed text-muted',
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
)

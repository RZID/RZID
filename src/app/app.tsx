import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Section } from '@/components/layout/section'
import { Heading } from '@/components/ui/heading'
import { TagList } from '@/components/ui/tag-list'
import { Text } from '@/components/ui/text'
import { experience } from '@/content/experience'
import { profile } from '@/content/profile'
import { projects } from '@/content/projects'
import { sectionTitles } from '@/content/sections'
import { usePreferences } from '@/hooks/use-preferences'
import { pickLocalized } from '@/lib/locale'

export const App = () => {
  const { locale } = usePreferences()

  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <Header />
      <main id="main" className="flex-1">
        <Section>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <Heading level="h1" size="display" className="lg:col-span-7">
              {profile.name}
            </Heading>
            <div className="lg:col-span-4 lg:col-start-9">
              <Text size="lg" tone="muted">
                {pickLocalized(profile.summary, locale)}
              </Text>
            </div>
          </div>
        </Section>

        <Section id="work" heading={pickLocalized(sectionTitles.work, locale)}>
          <ul className="border-t border-line">
            {projects.map((project) => (
              <li
                key={project.name}
                className="grid gap-4 border-b border-line py-8 sm:gap-6 lg:grid-cols-12 lg:py-10"
              >
                <div className="lg:col-span-7">
                  <Heading level="h3" size="item">
                    {project.name}
                  </Heading>
                  <Text tone="muted" className="mt-2 max-w-prose">
                    {pickLocalized(project.outcome, locale)}
                  </Text>
                </div>
                <TagList
                  tags={project.stack.map((item) => item.name)}
                  className="self-start lg:col-span-4 lg:col-start-9 lg:justify-end"
                />
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" heading={pickLocalized(sectionTitles.experience, locale)}>
          {experience.map((job) => (
            <article key={job.company} className="border-t border-line pt-8">
              <div className="grid gap-4 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <Heading level="h3" size="item">
                    {job.company}
                  </Heading>
                  <Text tone="muted" className="mt-1">
                    {pickLocalized(job.role, locale)} · {pickLocalized(job.employmentType, locale)}
                  </Text>
                </div>
                <Text size="sm" className="font-mono lg:col-span-4 lg:col-start-9 lg:text-right">
                  {pickLocalized(job.period, locale)}
                </Text>
              </div>
              <ul className="mt-6 max-w-prose space-y-2">
                {job.highlights.map((highlight) => (
                  <li key={highlight.en}>
                    <Text tone="muted">{pickLocalized(highlight, locale)}</Text>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Section>
      </main>
      <Footer />
    </div>
  )
}

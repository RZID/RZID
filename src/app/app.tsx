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

export const App = () => (
  <div className="flex min-h-dvh flex-col">
    <Header />
    <main className="flex-1">
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Heading level="h1" size="display" className="lg:col-span-7">
            {profile.name}
          </Heading>
          <div className="lg:col-span-4 lg:col-start-9">
            <Text size="lg" tone="muted">
              {profile.summary.en}
            </Text>
          </div>
        </div>
      </Section>

      <Section heading={sectionTitles.work.en}>
        <ul className="border-t border-foreground/10">
          {projects.map((project) => (
            <li
              key={project.name}
              className="grid gap-4 border-b border-foreground/10 py-8 sm:gap-6 lg:grid-cols-12 lg:py-10"
            >
              <div className="lg:col-span-7">
                <Heading level="h3" size="item">
                  {project.name}
                </Heading>
                <Text tone="muted" className="mt-2 max-w-prose">
                  {project.summary.en}
                </Text>
              </div>
              <TagList
                tags={project.stack}
                className="self-start lg:col-span-4 lg:col-start-9 lg:justify-end"
              />
            </li>
          ))}
        </ul>
      </Section>

      <Section heading={sectionTitles.experience.en}>
        {experience.map((job) => (
          <article key={job.company} className="border-t border-foreground/10 pt-8">
            <div className="grid gap-4 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Heading level="h3" size="item">
                  {job.company}
                </Heading>
                <Text tone="muted" className="mt-1">
                  {job.role.en} · {job.employmentType.en}
                </Text>
              </div>
              <Text size="sm" className="font-mono lg:col-span-4 lg:col-start-9 lg:text-right">
                {job.period.en}
              </Text>
            </div>
            <ul className="mt-6 max-w-prose space-y-2">
              {job.highlights.map((highlight) => (
                <li key={highlight.en}>
                  <Text tone="muted">{highlight.en}</Text>
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

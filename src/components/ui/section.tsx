import type { ComponentPropsWithoutRef } from 'react'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { cn } from '@/lib/cn'

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  title?: string
}

export const Section = ({ title, className, children, ...props }: SectionProps) => (
  <section className={cn('py-16 sm:py-24', className)} {...props}>
    <Container>
      {title === undefined ? null : (
        <Heading level="h2" size="section" className="mb-10 sm:mb-14">
          {title}
        </Heading>
      )}
      {children}
    </Container>
  </section>
)

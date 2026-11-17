import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { cn } from '@/lib/cn'

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  heading?: ReactNode
}

export const Section = ({ heading, className, children, ...props }: SectionProps) => (
  <section className={cn('scroll-mt-20 py-16 sm:py-24', className)} {...props}>
    <Container>
      {heading === undefined ? null : (
        <Heading level="h2" size="section" className="mb-10 sm:mb-14">
          {heading}
        </Heading>
      )}
      {children}
    </Container>
  </section>
)

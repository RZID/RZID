import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  title?: string
  lead?: string
}

export const Section = ({ title, lead, className, children, ...props }: SectionProps) => (
  <section
    className={cn('mx-auto max-w-content scroll-mt-20 px-5 py-14 sm:py-18', className)}
    {...props}
  >
    {title === undefined ? null : (
      <h2 className="mb-6 font-pixel text-section leading-tight">
        <span aria-hidden className="text-accent">
          ▶{' '}
        </span>
        {title}
      </h2>
    )}
    {lead === undefined ? null : <p className="-mt-3 mb-6 max-w-prose text-muted">{lead}</p>}
    {children}
  </section>
)

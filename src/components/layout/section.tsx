import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  title?: string
  lead?: string
  meta?: string
}

export const Section = ({ title, lead, meta, className, children, ...props }: SectionProps) => (
  <section
    className={cn('mx-auto max-w-content scroll-mt-20 px-5 py-14 sm:py-16', className)}
    {...props}
  >
    {title === undefined ? null : (
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="font-pixel text-section leading-tight">
          <span aria-hidden className="text-accent-text">
            ▶{' '}
          </span>
          {title}
        </h2>
        {meta === undefined ? null : (
          <span className="font-sans text-label text-muted">{meta}</span>
        )}
      </div>
    )}
    {lead === undefined ? null : <p className="-mt-3 mb-6 max-w-prose text-muted">{lead}</p>}
    {children}
  </section>
)

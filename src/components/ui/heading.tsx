import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

const headingTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
} as const

export type HeadingLevel = keyof typeof headingTags
export type HeadingSize = 'display' | 'section' | 'heading' | 'item'

const headingSizes: Record<HeadingSize, string> = {
  display: 'text-display',
  section: 'text-title',
  heading: 'text-heading',
  item: 'text-item',
}

type HeadingProps = ComponentPropsWithoutRef<'h1'> & {
  level?: HeadingLevel
  size?: HeadingSize
}

export const Heading = ({ level = 'h2', size = 'section', className, ...props }: HeadingProps) => {
  const Tag = headingTags[level]
  return (
    <Tag
      className={cn('font-serif font-normal text-balance', headingSizes[size], className)}
      {...props}
    />
  )
}

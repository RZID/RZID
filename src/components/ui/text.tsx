import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export type TextSize = 'sm' | 'base' | 'lg'
export type TextTone = 'default' | 'muted'

const textSizes: Record<TextSize, string> = {
  sm: 'text-sm leading-relaxed',
  base: 'text-base leading-relaxed',
  lg: 'text-lg leading-relaxed sm:text-xl',
}

const textTones: Record<TextTone, string> = {
  default: 'text-foreground',
  muted: 'text-foreground/70',
}

type TextProps = ComponentPropsWithoutRef<'p'> & {
  size?: TextSize
  tone?: TextTone
}

export const Text = ({ size = 'base', tone = 'default', className, ...props }: TextProps) => (
  <p className={cn('text-pretty', textSizes[size], textTones[tone], className)} {...props} />
)

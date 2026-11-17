import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export type TextSize = 'sm' | 'base' | 'lg'
export type TextTone = 'default' | 'muted'

const textSizes: Record<TextSize, string> = {
  sm: 'text-small',
  base: 'text-body',
  lg: 'text-lead',
}

const textTones: Record<TextTone, string> = {
  default: 'text-foreground',
  muted: 'text-muted',
}

type TextProps = ComponentPropsWithoutRef<'p'> & {
  size?: TextSize
  tone?: TextTone
}

export const Text = ({ size = 'base', tone = 'default', className, ...props }: TextProps) => (
  <p className={cn('text-pretty', textSizes[size], textTones[tone], className)} {...props} />
)

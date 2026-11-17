import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type CardProps = ComponentPropsWithoutRef<'div'>

export const Card = ({ className, ...props }: CardProps) => (
  <div
    className={cn('rounded-card border border-line bg-surface p-6 shadow-card', className)}
    {...props}
  />
)

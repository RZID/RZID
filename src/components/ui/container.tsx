import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

type ContainerProps = ComponentPropsWithoutRef<'div'>

export const Container = ({ className, ...props }: ContainerProps) => (
  <div className={cn('mx-auto w-full max-w-6xl px-6 sm:px-8', className)} {...props} />
)

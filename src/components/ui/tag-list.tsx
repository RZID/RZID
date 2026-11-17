import type { ComponentPropsWithoutRef } from 'react'
import { Tag } from '@/components/ui/tag'
import { cn } from '@/lib/cn'

type TagListProps = Omit<ComponentPropsWithoutRef<'ul'>, 'children'> & {
  tags: readonly string[]
}

export const TagList = ({ tags, className, ...props }: TagListProps) => (
  <ul className={cn('flex flex-wrap gap-2', className)} {...props}>
    {tags.map((tag) => (
      <li key={tag}>
        <Tag>{tag}</Tag>
      </li>
    ))}
  </ul>
)

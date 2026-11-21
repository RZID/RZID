import { cn } from '@/lib/cn'
import { spritePaths } from '@/lib/pixel-sprite'
import { palette, sprites } from './sprites'
import { techIconId } from './tech-icon-id'

type TechIconProps = {
  label: string
  className?: string
}

export const TechIcon = ({ label, className }: TechIconProps) => {
  const icon = techIconId(label)

  if (icon === undefined) {
    return null
  }

  return (
    <svg
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={cn('h-4 w-4 shrink-0', className)}
    >
      {spritePaths(sprites[icon].split('\n'), palette).map((path) => (
        <path key={path.fill} d={path.d} style={{ fill: path.fill }} />
      ))}
    </svg>
  )
}

import { cn } from '@/lib/cn'

const art = [
  '...kkkkkk...',
  '..kkkkkkkk..',
  '..kssssssk..',
  '..ksessesk..',
  '..kssssssk..',
  '...kssssk...',
  '..hhhhhhhh..',
  '.hhhhhhhhhh.',
  '.hhhhhhhhhh.',
  '.hsLLLLLLsh.',
  '..hLLLLLLh..',
  '..pppppppp..',
  '..pppp.pppp.',
  '..bbbb..bbbb',
] as const

const palette: Record<string, string> = {
  k: 'var(--shadow)',
  s: '#f0b88e',
  e: '#111111',
  h: 'var(--accent)',
  L: '#8c93a8',
  p: '#3b4a7a',
  b: '#151515',
}

type PixelAvatarProps = {
  className?: string
}

export const PixelAvatar = ({ className }: PixelAvatarProps) => {
  const width = art[0]?.length ?? 0

  return (
    <svg
      viewBox={`0 0 ${width} ${art.length}`}
      role="img"
      aria-label="Avatar pixel Ramadhanu"
      shapeRendering="crispEdges"
      className={cn('h-auto', className)}
    >
      {art.flatMap((row, y) =>
        row.split('').map((cell, x) => {
          const fill = palette[cell]

          if (fill === undefined) {
            return null
          }

          return <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" style={{ fill }} />
        }),
      )}
    </svg>
  )
}

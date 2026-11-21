type SpritePath = {
  d: string
  fill: string
}

/**
 * Turns a pixel grid into one path per palette colour so an icon costs a handful
 * of SVG nodes instead of one rect per pixel.
 */
export const spritePaths = (
  rows: readonly string[],
  palette: Record<string, string>,
): SpritePath[] => {
  const byFill = new Map<string, string[]>()

  rows.forEach((row, y) => {
    row.split('').forEach((cell, x) => {
      const fill = palette[cell]

      if (fill === undefined) {
        return
      }

      const parts = byFill.get(fill)

      if (parts === undefined) {
        byFill.set(fill, [`M${x} ${y}h1v1h-1z`])

        return
      }

      parts.push(`M${x} ${y}h1v1h-1z`)
    })
  })

  return [...byFill].map(([fill, parts]) => ({ fill, d: parts.join('') }))
}

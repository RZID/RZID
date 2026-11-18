import { readFileSync } from 'node:fs'

const css = readFileSync(new URL('../src/styles/index.css', import.meta.url), 'utf8')
const root = css.match(/:root \{([^}]*)\}/)[1]
const tokens = Object.fromEntries(
  [...root.matchAll(/--([\w-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]),
)

const resolve = (name, theme) => {
  const value = tokens[name]
  if (!value) throw new Error(`unknown token --${name}`)
  const mode = value.match(
    /^light-dark\(((?:rgba?\([^)]*\)|#[\da-f]{3,8})),\s*((?:rgba?\([^)]*\)|#[\da-f]{3,8}))\)$/i,
  )
  return mode ? mode[theme === 'light' ? 1 : 2] : value
}

const parse = (value) => {
  const channels = value.startsWith('#')
    ? [1, 3, 5].map((i) => parseInt(value.slice(i, i + 2), 16))
    : value.match(/[\d.]+/g).map(Number)
  if (channels.length === 4 && channels[3] < 1)
    throw new Error(`audited pairs must be opaque: ${value}`)
  return channels.slice(0, 3)
}

const lum = (rgb) => {
  const [r, g, b] = rgb.map((c) => {
    const s = c / 255
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)]
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05)
}

const pairs = [
  ['foreground', 'background', 4.5],
  ['foreground', 'surface', 4.5],
  ['muted', 'background', 4.5],
  ['muted', 'surface', 4.5],
  ['accent-text', 'background', 4.5],
  ['accent-text', 'surface', 4.5],
  ['background', 'foreground', 4.5],
  ['on-accent', 'accent-control', 4.5],
  ['on-accent', 'accent-control-hover', 4.5],
  ['on-accent', 'accent-control-active', 4.5],
  ['on-accent-disabled', 'accent-control-disabled', 4.5],
  ['accent-text', 'background', 3],
  ['accent-text', 'surface', 3],
  ['line-control', 'background', 3],
  ['line-control', 'surface', 3],
  ['accent', 'background', 3],
]

let failed = false
for (const theme of ['light', 'dark']) {
  for (const [fgName, bgName, min] of pairs) {
    const value = ratio(parse(resolve(fgName, theme)), parse(resolve(bgName, theme)))
    const pass = value >= min
    failed ||= !pass
    console.log(
      `${pass ? 'pass' : 'FAIL'}  ${theme.padEnd(5)} ${`${fgName} on ${bgName}`.padEnd(38)} ${value.toFixed(2).padStart(5)}  min ${min}`,
    )
  }
}
if (failed) process.exitCode = 1

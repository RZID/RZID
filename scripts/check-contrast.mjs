import { readFileSync } from 'node:fs'

const css = readFileSync(new URL('../src/styles/index.css', import.meta.url), 'utf8')

const readTokens = (marker) => {
  const start = css.indexOf(marker)

  if (start === -1) {
    return {}
  }

  const block = css.slice(start, css.indexOf('}', start))
  const found = {}

  for (const match of block.matchAll(/--([a-z-]+):\s*(#[0-9a-fA-F]{6})/g)) {
    found[match[1]] = match[2].toLowerCase()
  }

  return found
}

const themes = {
  dark: readTokens(':root'),
  light: readTokens(":root[data-theme='light']"),
}

const luminance = (hex) => {
  const channels = [1, 3, 5].map((index) => {
    const value = parseInt(hex.slice(index, index + 2), 16) / 255
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  })

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
}

const contrast = (first, second) => {
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a)
  return (values[0] + 0.05) / (values[1] + 0.05)
}

const checks = [
  ['dark', 'ink', 'page', 4.5],
  ['dark', 'muted', 'page', 4.5],
  ['dark', 'ink', 'panel', 4.5],
  ['dark', 'muted', 'panel', 4.5],
  ['dark', 'on-accent', 'accent', 4.5],
  ['dark', 'mint', 'page', 4.5],
  ['light', 'ink', 'page', 4.5],
  ['light', 'muted', 'page', 4.5],
  ['light', 'ink', 'panel', 4.5],
  ['light', 'muted', 'panel', 4.5],
  ['light', 'on-accent', 'accent', 4.5],
  ['light', 'mint', 'page', 4.5],
]

let failed = false

for (const [theme, foreground, background, minimum] of checks) {
  const tokens = themes[theme] ?? {}
  const foregroundHex = tokens[foreground]
  const backgroundHex = tokens[background]
  const label = `${theme} ${foreground} on ${background}`.padEnd(42)

  if (
    typeof foregroundHex !== 'string' ||
    typeof backgroundHex !== 'string' ||
    !/^#[0-9a-f]{6}$/.test(foregroundHex) ||
    !/^#[0-9a-f]{6}$/.test(backgroundHex)
  ) {
    console.error(`FAIL  ${label} missing or invalid token`)
    failed = true
    continue
  }

  const ratio = contrast(foregroundHex, backgroundHex)
  const status = ratio >= minimum ? 'pass' : 'FAIL'

  if (ratio < minimum) {
    failed = true
  }

  console.log(`${status}  ${label} ${ratio.toFixed(2).padStart(6)}  min ${minimum}`)
}

if (failed) {
  process.exitCode = 1
}

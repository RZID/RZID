import { readdirSync, readFileSync, statSync } from 'node:fs'
import { extname, join } from 'node:path'
import { parseSync } from 'oxc-parser'

const ROOT = 'src'
const EXTENSIONS = new Set(['.ts', '.tsx'])
const METHOD_PARENTS = new Set(['MethodDefinition', 'TSAbstractMethodDefinition'])

const listFiles = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) {
      return listFiles(path)
    }
    return EXTENSIONS.has(extname(path)) ? [path] : []
  })

const isAllowedMethod = (parent) =>
  METHOD_PARENTS.has(parent?.type) ||
  (parent?.type === 'Property' && (parent.method || parent.kind !== 'init'))

const findViolations = (node, parent, found) => {
  if (Array.isArray(node)) {
    node.forEach((child) => findViolations(child, parent, found))
    return found
  }
  if (node === null || typeof node !== 'object') {
    return found
  }
  const isFunctionKeyword =
    node.type === 'FunctionDeclaration' ||
    (node.type === 'FunctionExpression' && !isAllowedMethod(parent))
  if (isFunctionKeyword) {
    found.push(node.start)
  }
  Object.entries(node).forEach(([key, child]) => {
    if (key !== 'parent') {
      findViolations(child, node, found)
    }
  })
  return found
}

const lineOf = (source, offset) => source.slice(0, offset).split('\n').length

const violations = listFiles(ROOT).flatMap((file) => {
  const source = readFileSync(file, 'utf8')
  const { program } = parseSync(file, source)
  return findViolations(program, null, []).map((offset) => `${file}:${lineOf(source, offset)}`)
})

if (violations.length > 0) {
  console.error(`The function keyword is banned. Use arrow functions:\n${violations.join('\n')}`)
  process.exit(1)
}
console.log('arrow-only: ok')

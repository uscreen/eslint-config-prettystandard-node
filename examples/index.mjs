/**
 * proper imports
 */
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
console.log(__dirname)

/**
 * no semicolons
 */
const string = ''

/**
 * single quotes
 */
const array = ['one', 'two']

/**
 * no trailing comma
 */
const object = {
  one: 'first',
  two: 'second'
}

/**
 * bracket spacing
 */
const summary = { array, object }

module.exports = {
  string,
  summary
}

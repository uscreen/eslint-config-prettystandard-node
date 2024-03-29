/**
 * proper imports
 */
const path = require('path')
console.log(path.join(__dirname, 'locales'))

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

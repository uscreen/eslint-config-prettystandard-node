module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  rules: {
    'generator-star-spacing': 'off',
    'space-before-function-paren': 'off',
    /* c8 ignore next */
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true
      }
    ]
  }
}

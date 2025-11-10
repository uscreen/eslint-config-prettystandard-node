# @uscreen.de/eslint-config-prettystandard-node

[![Test CI](https://github.com/uscreen/eslint-config-prettystandard-node/actions/workflows/main.yml/badge.svg)](https://github.com/uscreen/eslint-config-prettystandard-node/actions/workflows/main.yml)
[![Test Coverage](https://coveralls.io/repos/github/uscreen/eslint-config-prettystandard-node/badge.svg?branch=master)](https://coveralls.io/github/uscreen/eslint-config-prettystandard-node?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/uscreen/eslint-config-prettystandard-node/badge.svg?targetFile=package.json)](https://snyk.io/test/github/uscreen/eslint-config-prettystandard-node?targetFile=package.json)
[![NPM Version](https://badge.fury.io/js/@uscreen.de%2Feslint-config-prettystandard-node.svg)](https://badge.fury.io/js/@uscreen.de%2Feslint-config-prettystandard-node)

> ESLint sharable config: prettier &amp; standard for node

While maintaining a larger number of projects with different versions of Node.js, modules, and linters, we can't recommend installing any global packages or binaries at all. Thus ESLint and it's config get installed as configured devDependency within their projects package.json. Editors are configured to use local `eslint` if found to overcome compatibility issues throughout different projects.

This package aims to avoid boilerplate and cope&paste with dozens of dotfiles in that scenario.

## Install

Install all required __plugins__ together with the __ESLint__ and __Prettier__ binaries as direct dependencies by adding this package to your devDependencies.

> This is _not_ following the proposed best-practice (see roadmap below), but _works_.

__pnpm:__
```bash
pnpm add @uscreen.de/eslint-config-prettystandard-node -D
```

__npm:__
```bash
npm install @uscreen.de/eslint-config-prettystandard-node -D
```

## Usage

Add or modify your `.eslintrc.js` to extend `@uscreen.de/eslint-config-prettystandard-node`, for example:

```js
module.exports = {
  extends: ['@uscreen.de/eslint-config-prettystandard-node']
}
```

This includes Prettier configuration, so you don't need to apply any extra `.prettierrc`.

## Roadmap

- declare plugin deps properly:
  - a) https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config
  - b) https://github.com/eslint/eslint/pull/12460#issuecomment-549108202
  - c) https://www.npmjs.com/package/@rushstack/eslint-patch
  - d) https://github.com/eslint/eslint/issues/13481

## Changelog

> Format according to https://keepachangelog.com

### v0.3.0

#### Changed

- adjust node requirements
- replace tap with native node tests
- migrate to pnpm

### v0.2.0

#### Changed

- upgrade to eslint ^8.5.0
- upgrade to prettier ^2.5.1

### v0.1.0

#### Added

- Readme with instructions

### v0.0.0

- initially bootstrapped

---

## License

Licensed under [MIT](./LICENSE).

## Credits

Maintained, Supported and Sponsored by [u|screen](https://uscreen.de)

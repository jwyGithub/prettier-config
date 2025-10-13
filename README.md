# @janone/prettier-config

#### janone prettier-config

<p align="center">
  <img src="https://img.shields.io/npm/v/@janone/prettier-config" alt='version'>
  <img src="https://img.shields.io/npm/dm/@janone/prettier-config" alt='download'>
  <img src="https://img.shields.io/github/issues/jwyGithub/prettier" alt='issues'>
  <img src="https://img.shields.io/github/license/jwyGithub/prettier" alt='license'>
</p>
<br />

### install

#### with pnpm

```sh
pnpm add @janone/prettier-config prettier -D
```

#### with yarn

```sh
yarn add @janone/prettier-config prettier -D
```

#### with npm

```sh
npm install @janone/prettier-config prettier -D
```

### use

> prettier.config.mjs

```js
import { prettier } from '@janone/prettier-config';
export default prettier();
```

### use cli

> select the configuration file

```sh
pnpm dlx @janone/prettier-config
```

> use the default configuration file

```sh
pnpm dlx @janone/prettier-config -y
```

# @jawyn/prettier-config

#### jawyn prettier-config

<p align="center">
  <img src="https://img.shields.io/npm/v/@jawyn/prettier-config" alt='version'>
  <img src="https://img.shields.io/npm/dm/@jawyn/prettier-config" alt='download'>
  <img src="https://img.shields.io/github/issues/jwyGithub/prettier" alt='issues'>
  <img src="https://img.shields.io/github/license/jwyGithub/prettier" alt='license'>
</p>
<br />

### install

#### with pnpm

```sh
pnpm add @jawyn/prettier-config prettier -D
```

#### with yarn

```sh
yarn add @jawyn/prettier-config prettier -D
```

#### with npm

```sh
npm install @jawyn/prettier-config prettier -D
```

### use

> prettier.config.mjs

```js
import { prettier } from '@jawyn/prettier-config';
export default prettier();
```

### use cli

> select the configuration file

```sh
pnpm dlx @jawyn/prettier-config
```

> use the default configuration file

```sh
pnpm dlx @jawyn/prettier-config -y
```

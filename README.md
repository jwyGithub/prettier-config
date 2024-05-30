# @jiangweiye/pritter-config

#### jiangweiye pritter-config

<p align="center">
  <img src="https://img.shields.io/npm/v/@jiangweiye/prettier-config" alt='version'>
  <img src="https://img.shields.io/npm/dm/@jiangweiye/prettier-config" alt='download'>
  <img src="https://img.shields.io/github/issues/jwyGithub/prettier" alt='issues'>
  <img src="https://img.shields.io/github/license/jwyGithub/prettier" alt='license'>
</p>
<br />

### install

#### with pnpm

```sh
pnpm add @jiangweiye/prettier-config prettier -D
```

#### with yarn

```sh
yarn add @jiangweiye/prettier-config prettier -D
```

#### with npm

```sh
npm install @jiangweiye/prettier-config prettier -D
```

### use

> prettier.config.mjs

```js
import { prettier } from '@jiangweiye/prettier-config';
export default prettierConfig();
```

### use cli

> select the configuration file

```sh
npx pritter-config
```

> use the default configuration file

```sh
npx pritter-config -y
```

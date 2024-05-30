// src/cli/cli.ts
import process2 from "node:process";
import * as p2 from "@clack/prompts";
import c2 from "picocolors";
import { hideBin } from "yargs/helpers";
import yargs from "yargs";

// package.json
var package_default = {
  name: "@jiangweiye/prettier-config",
  type: "module",
  version: "0.0.13",
  description: "A prettier config for jiangweiye",
  author: "jiangweiye <jiangweiye@outlook.com> (https://github.com/jwyGithub)",
  license: "SEE LICENSE IN LICENSE.md",
  homepage: "https://github.com/jwyGithub/prettier",
  publishConfig: {
    access: "public"
  },
  keywords: [
    "prettier",
    "config"
  ],
  sideEffects: false,
  exports: {
    ".": {
      types: "./dist/index.d.ts",
      import: "./dist/index.js",
      require: "./dist/index.cjs"
    },
    "./options": {
      types: "./dist/src/options.d.ts",
      import: "./dist/src/options.cjs",
      require: "./dist/src/options.js"
    },
    "./format": {
      types: "./dist/src/format.d.ts",
      import: "./dist/src/format.js",
      require: "./dist/src/format.cjs"
    }
  },
  main: "./dist/index.cjs",
  module: "./dist/index.js",
  types: "./dist/index.d.ts",
  typesVersions: {
    ".": {
      "*": [
        "./dist/index.d.ts"
      ],
      options: [
        "./dist/src/options.d.ts"
      ],
      format: [
        "./dist/src/format.d.ts"
      ]
    }
  },
  bin: {
    "pritter-config": "bin/index.js"
  },
  files: [
    "bin",
    "dist"
  ],
  scripts: {
    build: "tsup",
    cli: "esno src/cli/cli.ts",
    format: "prettier --write .",
    lint: "eslint .",
    "lint:fix": "eslint --fix ."
  },
  dependencies: {
    "@clack/prompts": "^0.7.0",
    picocolors: "^1.0.1",
    prettier: "^3.2.5",
    yargs: "^17.7.2"
  },
  optionalDependencies: {
    prettier: "^3.2.5"
  },
  devDependencies: {
    "@jiangweiye/eslint-config": "0.1.5-beta.2",
    "@jiangweiye/prettier-config": "workspace:*",
    "@jiangweiye/tsconfig": "^0.0.11",
    "@types/node": "^20.12.13",
    "@types/yargs": "^17.0.32",
    eslint: "^9.3.0",
    "eslint-plugin-format": "^0.1.1",
    esno: "^4.7.0",
    tsup: "^8.0.2",
    typescript: "^5.4.5"
  }
};

// src/cli/update-config-file.ts
import * as fs from "node:fs";
import process from "node:process";
import path from "node:path";
import * as p from "@clack/prompts";
import c from "picocolors";

// src/options.ts
var DEFAULT_OPTIONS = {
  printWidth: 140,
  tabWidth: 4,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: true,
  trailingComma: "none",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "avoid",
  insertPragma: false,
  proseWrap: "never",
  htmlWhitespaceSensitivity: "strict",
  vueIndentScriptAndStyle: false,
  endOfLine: "lf",
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: false
};

// src/cli/update-config-file.ts
function hasConfigFile(fileName) {
  const cwd = process.cwd();
  return fs.existsSync(path.join(cwd, `${fileName}`));
}
function updateJSONFile(fileName) {
  const cwd = process.cwd();
  fs.writeFileSync(path.join(cwd, `${fileName}`), JSON.stringify(DEFAULT_OPTIONS, null, 4));
}
function updateYAMLFile(fileName) {
  const cwd = process.cwd();
  fs.writeFileSync(
    path.join(cwd, `${fileName}`),
    `${Object.entries(DEFAULT_OPTIONS).map(([key, value]) => `${key}: ${value}`).join("\n")}`
  );
}
function updateESMODULEFile(fileName) {
  const cwd = process.cwd();
  fs.writeFileSync(
    path.join(cwd, `${fileName}`),
    `import { prettier } from '@jiangweiye/prettier-config';

export default prettier();
`
  );
}
function updateCOMMONJSFile(fileName) {
  const cwd = process.cwd();
  fs.writeFileSync(
    path.join(cwd, `${fileName}`),
    `module.exports = require('@jiangweiye/prettier-config');
`
  );
}
function updateTOMLFile(fileName) {
  const cwd = process.cwd();
  fs.writeFileSync(
    path.join(cwd, `${fileName}`),
    `# .prettierrc.toml
${Object.entries(DEFAULT_OPTIONS).map(([key, value]) => `${key} = ${typeof value === "string" ? `'${value}'` : value}`).join("\n")}`
  );
}
function updateConfigFile({ type, fileName }) {
  if (hasConfigFile(fileName)) {
    p.intro(`${c.red(fileName)} ${c.dim(`existing...`)}`);
    return;
  }
  type === "JSON" && updateJSONFile(fileName);
  type === "YML" && updateYAMLFile(fileName);
  type === "YAML" && updateYAMLFile(fileName);
  type === "ESMODULE" && updateESMODULEFile(fileName);
  type === "COMMONJS" && updateCOMMONJSFile(fileName);
  type === "TOML" && updateTOMLFile(fileName);
}

// src/cli/cli.ts
var fileType = [
  { label: ".prettierrc", value: { type: "JSON", fileName: ".prettierrc" } },
  { label: ".prettierrc.json", value: { type: "JSON", fileName: ".prettierrc.json" } },
  { label: ".prettierrc.yml", value: { type: "YML", fileName: ".prettierrc.yml" } },
  { label: ".prettierrc.yaml", value: { type: "YAML", fileName: ".prettierrc.yaml" } },
  { label: ".prettierrc.json5", value: { type: "JSON", fileName: ".prettierrc.json5" } },
  { label: "prettier.config.js", value: { type: "COMMONJS", fileName: "prettier.config.js" } },
  { label: "prettier.config.mjs", value: { type: "ESMODULE", fileName: "prettier.config.mjs" } },
  { label: "prettier.config.cjs", value: { type: "COMMONJS", fileName: "prettier.config.cjs" } },
  { label: ".prettierrc.toml", value: { type: "TOML", fileName: ".prettierrc.toml" } }
];
function header() {
  console.log("\n");
  p2.intro(`${c2.green(package_default.name)}${c2.dim(`v${package_default.version}`)}`);
}
var instance = yargs(hideBin(process2.argv)).scriptName("@jiangweiye/eslint-config").usage("").command(
  "*",
  "Run the initialization or migration",
  (args) => args.option("yes", {
    alias: "y",
    description: "Skip prompts and use default values",
    type: "boolean"
  }).help(),
  async (args) => {
    header();
    try {
      if (args.yes) {
        updateConfigFile({ type: "ESMODULE", fileName: "prettier.config.mjs" });
      } else {
        const result = await p2.select({
          message: "Please select config file type:",
          options: fileType
        });
        updateConfigFile(result);
      }
    } catch (error) {
      p2.log.error(c2.inverse(c2.red(" Failed to migrate ")));
      p2.log.error(c2.red(`\u2718 ${String(error)}`));
      process2.exit(1);
    }
  }
).showHelpOnFail(false).alias("h", "help").version("version", package_default.version).alias("v", "version");
instance.help().argv;
export {
  fileType
};

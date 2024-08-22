var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/cli/cli.ts
var cli_exports = {};
__export(cli_exports, {
  fileType: () => fileType
});
module.exports = __toCommonJS(cli_exports);
var import_node_process2 = __toESM(require("process"), 1);
var p2 = __toESM(require("@clack/prompts"), 1);
var import_picocolors2 = __toESM(require("picocolors"), 1);
var import_helpers = require("yargs/helpers");
var import_yargs = __toESM(require("yargs"), 1);

// package.json
var package_default = {
  name: "@jiangweiye/prettier-config",
  type: "module",
  version: "0.0.14",
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
    "prettier-config": "bin/index.js"
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
    prettier: "^3.3.3",
    yargs: "^17.7.2"
  },
  optionalDependencies: {
    prettier: "^3.3.3"
  },
  devDependencies: {
    "@jiangweiye/eslint-config": "0.1.8-beta.1",
    "@jiangweiye/prettier-config": "workspace:*",
    "@jiangweiye/tsconfig": "^0.0.11",
    "@types/node": "^22.5.0",
    "@types/yargs": "^17.0.33",
    eslint: "^8.56.0",
    "eslint-plugin-format": "^0.1.2",
    esno: "^4.7.0",
    tsup: "^8.2.4",
    typescript: "^5.5.4"
  }
};

// src/cli/update-config-file.ts
var fs = __toESM(require("fs"), 1);
var import_node_process = __toESM(require("process"), 1);
var import_node_path = __toESM(require("path"), 1);
var p = __toESM(require("@clack/prompts"), 1);
var import_picocolors = __toESM(require("picocolors"), 1);

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
  const cwd = import_node_process.default.cwd();
  return fs.existsSync(import_node_path.default.join(cwd, `${fileName}`));
}
function updateJSONFile(fileName) {
  const cwd = import_node_process.default.cwd();
  fs.writeFileSync(import_node_path.default.join(cwd, `${fileName}`), JSON.stringify(DEFAULT_OPTIONS, null, 4));
}
function updateYAMLFile(fileName) {
  const cwd = import_node_process.default.cwd();
  fs.writeFileSync(
    import_node_path.default.join(cwd, `${fileName}`),
    `${Object.entries(DEFAULT_OPTIONS).map(([key, value]) => `${key}: ${value}`).join("\n")}`
  );
}
function updateESMODULEFile(fileName) {
  const cwd = import_node_process.default.cwd();
  fs.writeFileSync(
    import_node_path.default.join(cwd, `${fileName}`),
    `import { prettier } from '@jiangweiye/prettier-config';

export default prettier();
`
  );
}
function updateCOMMONJSFile(fileName) {
  const cwd = import_node_process.default.cwd();
  fs.writeFileSync(
    import_node_path.default.join(cwd, `${fileName}`),
    `module.exports = require('@jiangweiye/prettier-config');
`
  );
}
function updateTOMLFile(fileName) {
  const cwd = import_node_process.default.cwd();
  fs.writeFileSync(
    import_node_path.default.join(cwd, `${fileName}`),
    `# .prettierrc.toml
${Object.entries(DEFAULT_OPTIONS).map(([key, value]) => `${key} = ${typeof value === "string" ? `'${value}'` : value}`).join("\n")}`
  );
}
function updateConfigFile({ type, fileName }) {
  if (hasConfigFile(fileName)) {
    p.intro(`${import_picocolors.default.red(fileName)} ${import_picocolors.default.dim(`existing...`)}`);
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
  p2.intro(`${import_picocolors2.default.green(package_default.name)}${import_picocolors2.default.dim(`v${package_default.version}`)}`);
}
var instance = (0, import_yargs.default)((0, import_helpers.hideBin)(import_node_process2.default.argv)).scriptName("@jiangweiye/eslint-config").usage("").command(
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
      p2.log.error(import_picocolors2.default.inverse(import_picocolors2.default.red(" Failed to migrate ")));
      p2.log.error(import_picocolors2.default.red(`\u2718 ${String(error)}`));
      import_node_process2.default.exit(1);
    }
  }
).showHelpOnFail(false).alias("h", "help").version("version", package_default.version).alias("v", "version");
instance.help().argv;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  fileType
});

// src/format.ts
import * as prettier from "prettier";

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

// src/format.ts
async function format2(code, options) {
  return await prettier.format(code, { ...DEFAULT_OPTIONS, ...options || {} });
}
export {
  format2 as format
};

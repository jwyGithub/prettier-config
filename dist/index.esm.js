// index.ts
import { format as _format } from "prettier";
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
function prettier(options) {
  return { ...DEFAULT_OPTIONS, ...options || {} };
}
async function format(code, options) {
  return await _format(code, prettier(options));
}
export {
  DEFAULT_OPTIONS,
  format,
  prettier
};

import type { Options } from 'prettier';

/**
 * @description prettier default options
 * @see https://prettier.io/docs/en/options.html
 */
export const DEFAULT_OPTIONS: Options = {
    printWidth: 140,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'avoid',
    insertPragma: false,
    proseWrap: 'never',
    htmlWhitespaceSensitivity: 'strict',
    vueIndentScriptAndStyle: false,
    endOfLine: 'lf',
    embeddedLanguageFormatting: 'auto',
    singleAttributePerLine: false
};

import type { Options } from 'prettier';
import { format as _format } from 'prettier';

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

/**
 * @description prettier configuration
 * @param {Options} options
 * @author <jiangweiye@outlook.com>
 * @example
 * prettier({
 *   printWidth: 140,
 *   tabWidth: 4,
 * })
 * @see https://prettier.io/docs/en/options.html
 * @returns {Options} options
 */
export function prettier(options?: Options): Options {
    return { ...DEFAULT_OPTIONS, ...(options || {}) };
}

/**
 * @description 格式化代码
 * @param {string} code 代码
 * @param {Options} options 配置
 * @returns  {Promise<string>} 格式化后的代码
 */
export async function format(code: string, options?: Options): Promise<string> {
    return await _format(code, prettier(options));
}

import { Options } from 'prettier';

/**
 * @description prettier default options
 * @see https://prettier.io/docs/en/options.html
 */
declare const DEFAULT_OPTIONS: Options;
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
declare function prettier(options?: Options): Options;
/**
 * @description 格式化代码
 * @param {string} code 代码
 * @param {Options} options 配置
 * @returns  {Promise<string>} 格式化后的代码
 */
declare function format(code: string, options?: Options): Promise<string>;

export { DEFAULT_OPTIONS, format, prettier };

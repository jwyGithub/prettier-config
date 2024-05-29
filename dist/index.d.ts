import { Options } from 'prettier';
export { format } from './src/format.js';
export { DEFAULT_OPTIONS } from './src/options.js';

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

export { prettier };

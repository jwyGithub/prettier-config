import type { Options } from 'prettier';
import { DEFAULT_OPTIONS } from './src/options';

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

export * from './src/format';
export * from './src/options';

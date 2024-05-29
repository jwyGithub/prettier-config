import { format as _format } from 'prettier';
import type { Options } from 'prettier';
import { DEFAULT_OPTIONS } from './options';

/**
 * @description 格式化代码
 * @param {string} code 代码
 * @param {Options} options 配置
 * @returns  {Promise<string>} 格式化后的代码
 */
export async function format(code: string, options?: Options): Promise<string> {
    return await _format(code, { ...DEFAULT_OPTIONS, ...(options || {}) });
}

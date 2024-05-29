import { Options } from 'prettier';

/**
 * @description 格式化代码
 * @param {string} code 代码
 * @param {Options} options 配置
 * @returns  {Promise<string>} 格式化后的代码
 */
declare function format(code: string, options?: Options): Promise<string>;

export { format };

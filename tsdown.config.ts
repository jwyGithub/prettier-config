import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'tsdown';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entry = [
    path.resolve(__dirname, './src/format.ts'),
    path.resolve(__dirname, './src/options.ts'),
    path.resolve(__dirname, './index.ts'),
    path.resolve(__dirname, './src/cli/cli.ts')
];

export default defineConfig({
    entry,
    outDir: path.join(__dirname, './dist'),
    dts: true,
    format: ['esm', 'cjs'],
    clean: true,
    external: ['prettier'],
    tsconfig: path.resolve(__dirname, './tsconfig.json'),
    shims: true
});

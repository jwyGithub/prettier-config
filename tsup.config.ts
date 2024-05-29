import path from 'node:path';
import { defineConfig } from 'tsup';

const entry = [
    path.resolve(__dirname, './src/format.ts'),
    path.resolve(__dirname, './src/options.ts'),
    path.resolve(__dirname, './index.ts')
];

export default defineConfig({
    entry,
    outDir: path.join(__dirname, './dist'),
    outExtension({ format }) {
        return {
            js: `.${format}.js`
        };
    },
    dts: true,
    cjsInterop: true,
    format: ['esm', 'cjs'],
    clean: true,
    external: ['prettier'],
    splitting: false,
    tsconfig: path.resolve(__dirname, './tsconfig.json')
});

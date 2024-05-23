import path from 'node:path';
import { defineConfig } from 'tsup';

export default defineConfig({
    entry: [`${path.join(__dirname, './index.ts')}`],
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
    tsconfig: path.resolve(__dirname, './tsconfig.json')
});

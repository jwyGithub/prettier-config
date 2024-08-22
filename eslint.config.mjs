import eslint from '@jiangweiye/eslint-config';

export default eslint({
    formatters: true,
    typescript: true,
    rules: {
        'ts/no-unused-expressions': 'off'
    }
});

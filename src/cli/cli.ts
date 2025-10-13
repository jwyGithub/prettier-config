import type { Result } from './types';
import process from 'node:process';
import * as p from '@clack/prompts';
import c from 'picocolors';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import pkgJson from '../../package.json';
import updateConfigFile from './update-config-file';

export const fileType = [
    { label: '.prettierrc', value: { type: 'JSON', fileName: '.prettierrc' } },
    { label: '.prettierrc.json', value: { type: 'JSON', fileName: '.prettierrc.json' } },
    { label: '.prettierrc.yml', value: { type: 'YML', fileName: '.prettierrc.yml' } },
    { label: '.prettierrc.yaml', value: { type: 'YAML', fileName: '.prettierrc.yaml' } },
    { label: '.prettierrc.json5', value: { type: 'JSON', fileName: '.prettierrc.json5' } },
    { label: 'prettier.config.js', value: { type: 'COMMONJS', fileName: 'prettier.config.js' } },
    { label: 'prettier.config.mjs', value: { type: 'ESMODULE', fileName: 'prettier.config.mjs' } },
    { label: 'prettier.config.cjs', value: { type: 'COMMONJS', fileName: 'prettier.config.cjs' } },
    { label: '.prettierrc.toml', value: { type: 'TOML', fileName: '.prettierrc.toml' } }
];

function header() {
    console.log('\n');
    p.intro(`${c.green(pkgJson.name)}${c.dim(`v${pkgJson.version}`)}`);
}

const instance = yargs(hideBin(process.argv))
    .scriptName('@janone/prettier-config')
    .usage('')
    .command(
        '*',
        'Run the initialization or migration',
        args =>
            args
                .option('yes', {
                    alias: 'y',
                    description: 'Skip prompts and use default values',
                    type: 'boolean'
                })
                .help(),
        async args => {
            header();
            try {
                if (args.yes) {
                    updateConfigFile({ type: 'ESMODULE', fileName: 'prettier.config.mjs' });
                } else {
                    const result = await p.select({
                        message: 'Please select config file type:',
                        options: fileType
                    });
                    updateConfigFile(result as Result);
                }
            } catch (error) {
                p.log.error(c.inverse(c.red(' Failed to migrate ')));
                p.log.error(c.red(`✘ ${String(error)}`));
                process.exit(1);
            }
        }
    )
    .showHelpOnFail(false)
    .alias('h', 'help')
    .version('version', pkgJson.version)
    .alias('v', 'version');

instance.help().argv;

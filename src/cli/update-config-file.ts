import * as fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';
import * as p from '@clack/prompts';
import c from 'picocolors';
import { DEFAULT_OPTIONS } from '../options';
import type { Result } from './types';

function hasConfigFile(fileName: string) {
    const cwd = process.cwd();
    return fs.existsSync(path.join(cwd, `${fileName}`));
}

function updateJSONFile(fileName: string) {
    const cwd = process.cwd();
    fs.writeFileSync(path.join(cwd, `${fileName}`), JSON.stringify(DEFAULT_OPTIONS, null, 4));
}

function updateYAMLFile(fileName: string) {
    const cwd = process.cwd();
    fs.writeFileSync(
        path.join(cwd, `${fileName}`),
        `${Object.entries(DEFAULT_OPTIONS)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n')}`
    );
}

function updateESMODULEFile(fileName: string) {
    const cwd = process.cwd();
    fs.writeFileSync(
        path.join(cwd, `${fileName}`),
        `import { prettier } from '@jiangweiye/prettier-config';

export default prettier();
`
    );
}

function updateCOMMONJSFile(fileName: string) {
    const cwd = process.cwd();
    fs.writeFileSync(
        path.join(cwd, `${fileName}`),
        `module.exports = require('@jiangweiye/prettier-config');
`
    );
}

function updateTOMLFile(fileName: string) {
    const cwd = process.cwd();
    fs.writeFileSync(
        path.join(cwd, `${fileName}`),
        `# .prettierrc.toml\n${Object.entries(DEFAULT_OPTIONS)
            .map(([key, value]) => `${key} = ${typeof value === 'string' ? `'${value}'` : value}`)
            .join('\n')}`
    );
}

export default function updateConfigFile({ type, fileName }: Result) {
    if (hasConfigFile(fileName)) {
        p.intro(`${c.red(fileName)} ${c.dim(`existing...`)}`);
        return;
    }

    type === 'JSON' && updateJSONFile(fileName);

    type === 'YML' && updateYAMLFile(fileName);

    type === 'YAML' && updateYAMLFile(fileName);

    type === 'ESMODULE' && updateESMODULEFile(fileName);

    type === 'COMMONJS' && updateCOMMONJSFile(fileName);

    type === 'TOML' && updateTOMLFile(fileName);
}

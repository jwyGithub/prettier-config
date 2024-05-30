export interface Result {
    type: FileType;
    fileName: string;
}

export type FileType = 'JSON' | 'YML' | 'YAML' | 'COMMONJS' | 'ESMODULE' | 'TOML';

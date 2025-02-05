import { BlockAttributes } from '../lib/block-attributes';
export declare function compileLaTeX(content: string, fileDirectoryPath: string, normalizedAttributes: BlockAttributes): Promise<string>;
export declare function run(content: string, fileDirectoryPath: string, cmd: string, normalizedAttributes: BlockAttributes, latexEngine?: string): Promise<string>;

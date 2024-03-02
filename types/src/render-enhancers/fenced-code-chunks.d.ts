/// <reference types="cheerio" />
import { CodeChunkData, CodeChunksData } from '../code-chunk/code-chunk-data';
import { BlockInfo } from '../lib/block-info';
import { MarkdownEngineOutput, MarkdownEngineRenderOption } from '../markdown-engine';
import { HeadingData } from '../markdown-engine/toc';
export default function enhance($: CheerioStatic, codeChunksData: CodeChunksData, renderOptions: MarkdownEngineRenderOption, runOptions: RunCodeChunkOptions): Promise<void>;
export declare function renderCodeBlock($container: Cheerio, normalizedInfo: BlockInfo, $: CheerioStatic, codeChunksData: CodeChunksData, arrayOfCodeChunkData: CodeChunkData[], renderOptions: MarkdownEngineRenderOption, runOptions: RunCodeChunkOptions): Promise<void>;
export interface RunCodeChunkOptions {
    enableScriptExecution: boolean;
    fileDirectoryPath: string;
    filePath: string;
    imageFolderPath: string;
    latexEngine?: string;
    modifySource: (codeChunkData: CodeChunkData, result: string, filePath: string) => Promise<string>;
    parseMD: (inputString: string, options: MarkdownEngineRenderOption) => Promise<MarkdownEngineOutput>;
    headings: HeadingData[];
}
export declare function runCodeChunk(id: string, codeChunksData: CodeChunksData, runOptions: RunCodeChunkOptions): Promise<string>;
export declare function runCodeChunks(codeChunksData: CodeChunksData, runOptions: RunCodeChunkOptions): Promise<string[]>;

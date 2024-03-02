/// <reference types="node" />
import { KatexOptions } from 'katex';
import MarkdownIt from 'markdown-it';
import { MermaidConfig } from 'mermaid';
import { JsonObject } from 'type-fest';
import { Note } from './note';
import { Reference } from './reference';
export type { KatexOptions } from 'katex';
export type { MermaidConfig } from 'mermaid';
export declare const IS_NODE: boolean;
export type FileSystemStats = {
    mtimeMs: number;
    ctimeMs: number;
    size: number;
    isFile: () => boolean;
    isDirectory: () => boolean;
    isSymbolicLink: () => boolean;
};
export type FileSystemApi = {
    readFile: (path: string, encoding?: BufferEncoding) => Promise<string>;
    writeFile: (path: string, content: string, encoding?: string) => Promise<void>;
    mkdir: (path: string) => Promise<void>;
    exists: (path: string) => Promise<boolean>;
    stat: (path: string) => Promise<FileSystemStats>;
    readdir: (path: string) => Promise<string[]>;
    unlink: (path: string) => Promise<void>;
};
export type ExtendedMarkdownItOptions = {
    sourceMap?: boolean;
} & MarkdownIt.Options;
export type MathRenderingOption = 'None' | 'KaTeX' | 'MathJax';
export interface ParserConfig {
    onWillParseMarkdown: (markdown: string) => Promise<string>;
    onDidParseMarkdown: (html: string) => Promise<string>;
}
export type PreviewTheme = 'atom-dark.css' | 'atom-light.css' | 'atom-material.css' | 'github-dark.css' | 'github-light.css' | 'gothic.css' | 'medium.css' | 'monokai.css' | 'newsprint.css' | 'night.css' | 'none.css' | 'one-dark.css' | 'one-light.css' | 'solarized-dark.css' | 'solarized-light.css' | 'vue.css';
export type CodeBlockTheme = 'auto.css' | 'default.css' | 'atom-dark.css' | 'atom-light.css' | 'atom-material.css' | 'coy.css' | 'darcula.css' | 'dark.css' | 'funky.css' | 'github.css' | 'github-dark.css' | 'hopscotch.css' | 'monokai.css' | 'okaidia.css' | 'one-dark.css' | 'one-light.css' | 'pen-paper-coffee.css' | 'pojoaque.css' | 'solarized-dark.css' | 'solarized-light.css' | 'twilight.css' | 'vue.css' | 'vs.css' | 'xonokai.css';
export type RevealJsTheme = 'beige.css' | 'black.css' | 'blood.css' | 'league.css' | 'moon.css' | 'night.css' | 'serif.css' | 'simple.css' | 'sky.css' | 'solarized.css' | 'white.css' | 'none.css';
export type MermaidTheme = 'default' | 'forest' | 'dark' | 'neutral' | 'null';
export type FrontMatterRenderingOption = 'none' | 'table' | 'code';
export type WikiLinkTargetFileNameChangeCase = 'none' | 'camelCase' | 'pascalCase' | 'kebabCase' | 'snakeCase' | 'constantCase' | 'trainCase' | 'adaCase' | 'cobolCase' | 'dotNotation' | 'pathCase' | 'spaceCase' | 'capitalCase' | 'lowerCase' | 'upperCase';
export interface NotebookConfig {
    markdownFileExtensions: string[];
    globalCss: string;
    includeInHeader: string;
    mermaidConfig: MermaidConfig;
    mathjaxConfig: JsonObject;
    katexConfig: KatexOptions;
    usePandocParser: boolean;
    parserConfig: ParserConfig;
    enablePreviewZenMode: boolean;
    breakOnSingleNewLine: boolean;
    enableTypographer: boolean;
    enableWikiLinkSyntax: boolean;
    wikiLinkTargetFileExtension: string;
    wikiLinkTargetFileNameChangeCase: WikiLinkTargetFileNameChangeCase;
    enableLinkify: boolean;
    useGitHubStylePipedLink: boolean;
    enableEmojiSyntax: boolean;
    enableExtendedTableSyntax: boolean;
    enableCriticMarkupSyntax: boolean;
    protocolsWhiteList: string;
    mathRenderingOption: MathRenderingOption;
    mathInlineDelimiters: string[][];
    mathBlockDelimiters: string[][];
    mathRenderingOnlineService: string;
    mathjaxV3ScriptSrc: string;
    codeBlockTheme: CodeBlockTheme;
    previewTheme: PreviewTheme;
    revealjsTheme: RevealJsTheme;
    mermaidTheme: MermaidTheme;
    frontMatterRenderingOption: FrontMatterRenderingOption;
    imageFolderPath: string;
    printBackground: boolean;
    chromePath: string;
    imageMagickPath: string;
    pandocPath: string;
    pandocMarkdownFlavor: string;
    pandocArguments: string[];
    latexEngine: string;
    enableScriptExecution: boolean;
    enableHTML5Embed: boolean;
    HTML5EmbedUseImageSyntax: boolean;
    HTML5EmbedUseLinkSyntax: boolean;
    HTML5EmbedIsAllowedHttp: boolean;
    HTML5EmbedAudioAttributes: string;
    HTML5EmbedVideoAttributes: string;
    puppeteerWaitForTimeout: number;
    puppeteerArgs: string[];
    plantumlServer: string;
    plantumlJarPath: string;
    jsdelivrCdnHost: string;
    krokiServer: string;
    isVSCode: boolean;
    alwaysShowBacklinksInPreview: boolean;
}
export declare function getDefaultMermaidConfig(): MermaidConfig;
export declare function getDefaultMathjaxConfig(): JsonObject;
export declare function getDefaultKatexConfig(): KatexOptions;
export declare function getDefaultParserConfig(): ParserConfig;
export declare function getDefaultNotebookConfig(): NotebookConfig;
export interface Backlink {
    note: Partial<Note>;
    references: Partial<Reference>[];
    referenceHtmls: string[];
}
export interface WebviewConfig extends Partial<NotebookConfig> {
    scrollSync?: boolean;
    zoomLevel?: number;
    sourceUri?: string;
    cursorLine?: number;
    imageUploader?: ImageUploader;
}
export declare enum PreviewMode {
    SinglePreview = "Single Preview",
    MultiplePreviews = "Multiple Previews",
    PreviewsOnly = "Previews Only"
}
export type ImageUploader = 'imgur' | 'sm.ms' | 'qiniu';

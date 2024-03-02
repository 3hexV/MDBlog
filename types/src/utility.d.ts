/// <reference types="node" />
import * as child_process from 'child_process';
import * as temp from 'temp';
import { JsonObject } from 'type-fest';
import * as vscode from 'vscode';
import { BlockInfo } from './lib/block-info';
export declare function tempOpen(options: any): Promise<temp.OpenFile>;
export declare function openFile(filePath: string): child_process.ChildProcess | undefined;
export declare function sleep(ms: number): Promise<void>;
export declare function parseYAML(yaml?: string): JsonObject;
export declare function setCrossnoteBuildDirectory(path: string): void;
export declare function getCrossnoteBuildDirectory(): string;
export declare function useExternalAddFileProtocolFunction(func: (filePath: string, vscodePreviewPanel?: vscode.WebviewPanel | null) => string): void;
export declare function addFileProtocol(filePath: string, vscodePreviewPanel?: vscode.WebviewPanel | null): string;
export declare function removeFileProtocol(filePath: string): string;
export { uploadImage } from './tools/image-uploader';
export declare function allowUnsafeEval(fn: any): any;
export declare function allowUnsafeEvalAync(fn: () => Promise<any>): Promise<any>;
export declare function allowUnsafeNewFunction(fn: any): any;
export declare function allowUnsafeNewFunctionAsync(fn: () => Promise<any>): Promise<any>;
export declare function allowUnsafeEvalAndUnsafeNewFunctionAsync(fn: () => Promise<any>): Promise<any>;
export declare const loadDependency: (dependencyPath: string) => any;
export declare const extractCommandFromBlockInfo: (info: BlockInfo) => any;
export declare function Function(...args: string[]): any;
export declare namespace Function {
    var prototype: Function;
}
export declare function isVSCodeWebExtension(): boolean;
export declare function interpretJS(code: string): any;
export declare function findClosingTagIndex(inputString: string, tagName: string, startIndex?: number): number;
export declare function replaceVariablesInString(inputString: string, replacements?: {
    [key: string]: string;
}): string;

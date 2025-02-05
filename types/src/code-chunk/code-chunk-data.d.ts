import { BlockInfo } from '../lib/block-info';
export interface CodeChunkData {
    id: string;
    code: string;
    normalizedInfo: BlockInfo;
    plainResult: string;
    result: string;
    running: boolean;
    prev: string;
    next: string | null;
}
export interface CodeChunksData {
    [key: string]: CodeChunkData;
}

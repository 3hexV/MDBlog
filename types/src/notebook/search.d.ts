import { SearchOptions, SearchResult } from 'minisearch';
export declare function slugify(str: string, separater?: string): string;
export interface SearchDoc {
    id: string;
    title: string;
    filePath: string;
    aliases: string[];
}
export default class Search {
    private miniSearch;
    private _cache;
    constructor();
    add(filePath: string, title: string, aliases?: string[]): void;
    remove(filePath: string): void;
    search(queryString: string, options?: SearchOptions): SearchResult[];
    addAlias(filePath: string, alias: string): void;
    deleteAlias(filePath: string, alias: string): void;
}

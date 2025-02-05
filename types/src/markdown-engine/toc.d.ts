import MarkdownIt from 'markdown-it';
export interface TocOption {
    ordered: boolean;
    depthFrom: number;
    depthTo: number;
    tab: string;
    ignoreLink?: boolean;
}
export interface HeadingData {
    content: string;
    level: number;
    offset?: number;
    id?: string;
    lineNo?: number;
}
export declare function toc(headings: HeadingData[], opt: TocOption): {
    content: string;
    array: string[];
};
export declare function generateSidebarToCHTML(headings: HeadingData[], md: MarkdownIt, opt: TocOption): string;

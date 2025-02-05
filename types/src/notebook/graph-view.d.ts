import { Notebook } from '.';
export interface GraphViewNode {
    id: string;
    label: string;
}
export interface GraphViewLink {
    source: string;
    target: string;
}
export interface GraphViewData {
    hash: string;
    nodes: GraphViewNode[];
    links: GraphViewLink[];
}
export declare function constructGraphView(notebook: Notebook): GraphViewData;

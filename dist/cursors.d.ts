export interface Cursor {
    name: string;
    version: string;
    destinationID: string;
    assets: CursorAsset[];
}
export interface CursorAsset {
    type: string;
    path: string;
}
export declare const cursors: Cursor[];

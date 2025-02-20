export interface Cursor {
    name: string;
    version: string;
    destinationID: string;
    downloadURL: string;
    assets: CursorAsset[];
}
export interface CursorAsset {
    type: string;
    path: string;
}
export declare const cursors: Cursor[];

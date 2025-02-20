export interface Cursor {
  name: string
  version: string
  destinationID: string
  downloadURL: string
  assets: CursorAsset[]
}

export interface CursorAsset {
  type: string
  path: string
}

export const cursors: Cursor[] = [
  {
    name: "Bibata Modern",
    version: "0",
    destinationID: "bibataModern",
    downloadURL: "./bibataModernAssets/ash.bibatamodern.cape",
    assets: [
      {
        type: "Pointer",
        path: "./bibataModernAssets/Pointer.png"
      },
      {
        type: "Pointing",
        path: "./bibataModernAssets/Pointing-Hand.png"
      },
      {
        type: "Copy",
        path: "./bibataModernAssets/Copy.png"
      },
      {
        type: "Camera",
        path: "./bibataModernAssets/Camera-v2.png"
      }
    ]
  }
]
export interface Cursor {
  name: string
  version: string
  destinationID: string
  assets: CursorAsset[]
}

export interface CursorAsset {
  type: string
  path: string
}

export const cursors: Cursor[] = [
  {
    name: "test",
    version: "0",
    destinationID: "cursor1",
    assets: [
      {
        type: "Pointer",
        path: "/path/to/image.png"
      }
    ]
  },

  {
    name: "test2",
    version: "1",
    destinationID: "cursor2",
    assets: [
      {
        type: "Pointer",
        path: "/path/image.png"
      }
    ]
  }
]
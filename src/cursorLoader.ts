import {Cursor, CursorAsset, cursors} from "./cursors"

export function loadCursorArray(
  cursors: Cursor[]
):void {
  for (
    let i:number = 0;
    i < cursors.length;
    i++
  ) {
    const cursor:Cursor = cursors[i]
    if (!cursor.destinationID) {
      console.warn("Destination not found.")
      return
    }

    const destination:HTMLElement = document.getElementById(cursor.destinationID)
    const cursorAssets:CursorAsset[] = cursor.assets

    // Load name
    const nameTag:HTMLElement = document.createElement("h3")
    nameTag.innerText = cursor.name
    destination.appendChild(nameTag)

    // Load assets
    const grid:HTMLDivElement = document.createElement("div")
    grid.classList.add("grid")
    grid.classList.add("tight")
    grid.classList.add("edgeToEdge")
    grid.classList.add("spaced")
    destination.appendChild(grid)

    for (
      let i:number = 0;
      i < cursorAssets.length;
      i++
    ) {
      const asset = cursorAssets[i]

      const container: HTMLDivElement = document.createElement("div")
      container.classList.add("cursorAsset")

      container.innerHTML = `
        <img src="${asset.path}" alt="${asset.type}">
        <p>${asset.type}</p>
      `
      grid.appendChild(container)
    }

    // Load download button
    const downloadButton:HTMLAnchorElement = document.createElement("a")
    downloadButton.href = cursor.downloadURL
    downloadButton.innerHTML = `
      <button>Download (macOS)</button>
    `
    destination.appendChild(downloadButton)
  }
}

loadCursorArray(cursors)
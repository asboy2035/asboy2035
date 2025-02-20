import {Cursor, CursorAsset, cursors} from "./cursors"

function loadCursorArray(
  cursors: Cursor[]
):void {
  for (
    let i:number = 0;
    i < cursors.length;
    i++
  ) {
    const cursor:Cursor = cursors[i]
    const destination:HTMLElement = document.getElementById(cursor.destinationID)
    const cursorAssets:CursorAsset[] = cursor.assets

    // Load assets
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
      destination.appendChild(container)
    }
  }
}

loadCursorArray(cursors)
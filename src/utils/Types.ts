export enum PaintMode {
    NORMAL,
    FILL,
    SELECTION,
    PIPETTE,
    DELETE,
}

export type Vector2N = {
    x: number,
    y: number
}

export type CellSelected = {
    index: number,
    cellPos: Vector2N,
    cellSize: number,
    atlas: HTMLCanvasElement
}

export type ChunkData = {
    cellData: number[][],
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
}

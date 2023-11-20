import Cell from './Cell.js'

export default class Grid{
  #cells
  #grid
  #gridSize
  #cellSize
  #cellGap

  constructor(grid){
    this.#grid = grid
    this.#gridSize = 4
    this.#cellSize = 105
    this.#cellGap = 16

    this.#grid.style.setProperty('--grid-size', `${this.#gridSize}`)
    this.#grid.style.setProperty('--cell-size', `${this.#cellSize}px`)
    this.#grid.style.setProperty('--cell-gap', `${this.#cellGap}px`)

    this.#cells = this.#createCells()
  }

  #createCells(){
    const cells = []

    for(let i = 0; i < this.#gridSize * this.#gridSize; i++){
      const div = document.createElement('div')
      div.classList.add('cell')
      cells.push(new Cell(
        div,
        i % this.#gridSize,
        Math.floor(i / this.#gridSize)
      ))
      this.#grid.append(div)
    }

    return cells;
  }
}
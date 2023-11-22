import Cell from './Cell.js'
import Tile from './Tile.js'
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

  get #emptyCells(){
    return this.#cells.filter(cell => cell.tile === null)
  }

  get cells(){
    return this.#cells
  }

  get grid(){
    return this.#grid
  }

  get cellsByCol(){
    return this.#cells.reduce((prev, curr) => {
      prev[curr.col] = prev[curr.col] ?? []
      prev[curr.col][curr.row] = curr
      return prev
    }, [])
  }

  get cellsByRow(){
    return this.#cells.reduce((prev, curr) => {
      prev[curr.row] = prev[curr.row] ?? []
      prev[curr.row][curr.col] = curr
      return prev
    }, [])
  }

  createTileInRandomCell(){
    const newTile = new Tile(this.#grid)
    this.#emptyCells[
      Math.floor(Math.random() * this.#emptyCells.length)
    ].tile = newTile
    return new Promise(resolve => {
      newTile.tileElement.addEventListener('animationend', resolve, {once: true})
    })
  }

  remove(){
    this.#grid.remove()
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
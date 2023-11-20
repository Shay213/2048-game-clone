import Tile from './Tile.js'
export default class Cell{
  #container
  #col
  #row
  #tile

  constructor(container, col, row) {
    this.#container = container
    this.#col = col
    this.#row = row
    this.#tile = null  
  }

  get tile(){
    return this.#tile
  }

  set tile(tile){
    if(!tile instanceof Tile){
      throw new Error('Argument should instance of Tile class')
    }
    this.#tile = tile
    if(this.#tile === null) return
    this.#tile.row = this.#row
    this.#tile.col = this.#col
  }
}
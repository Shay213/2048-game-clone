import Tile from './Tile.js'
export default class Cell{
  #container
  #col
  #row
  #tile
  #mergeTile

  constructor(container, col, row) {
    this.#container = container
    this.#col = col
    this.#row = row
    this.#tile = null
    this.#mergeTile = null  
  }

  get col(){
    return this.#col
  }
  get row(){
    return this.#row
  }
  get tile(){
    return this.#tile
  }
  get mergeTile(){
    return this.#mergeTile
  }

  set mergeTile(tile){
    this.#mergeTile = tile
    if(tile === null) return
    this.#mergeTile.row = this.#row
    this.#mergeTile.col = this.#col
  }

  set tile(tile){
    if(!tile instanceof Tile){
      throw new Error('Argument should be instance of Tile class')
    }
    this.#tile = tile
    if(this.#tile === null) return
    this.#tile.row = this.#row
    this.#tile.col = this.#col
  }

  mergeTiles(){
    if(!this.#mergeTile || !this.#tile) return

    this.#tile.value += this.#mergeTile.value
    this.#mergeTile.remove()
    this.#mergeTile = null
  }

  canAccept(tile){
    return (
      this.tile === null ||
      (this.#mergeTile === null && this.tile.value === tile.value)
    )
  }
}
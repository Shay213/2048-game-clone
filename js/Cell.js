export default class Cell{
  #container
  #col
  #row

  constructor(container, col, row) {
    this.#container = container
    this.#col = col
    this.#row = row  
  }
}
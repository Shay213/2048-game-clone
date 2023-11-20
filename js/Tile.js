export default class Tile{
  #tileElement
  #row
  #col
  #value

  constructor(tileContainer, value = 2) {
    this.#tileElement = document.createElement('div')
    this.#tileElement.classList.add('tile')
    this.#tileElement.innerText = value
    tileContainer.append(this.#tileElement)
    this.#value = value
  }

  set row(value){
    this.#row = value
    this.#tileElement.style.setProperty('--row', this.#row)
  }

  set col(value){
    this.#col = value
    this.#tileElement.style.setProperty('--col', this.#col)
  }
}
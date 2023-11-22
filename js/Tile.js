export default class Tile{
  #tileElement
  #row
  #col
  #value

  constructor(tileContainer, value = 2) {
    this.#tileElement = document.createElement('div')
    this.#tileElement.classList.add('tile')
    tileContainer.append(this.#tileElement)
    this.value = value
  }

  set value(value){
    this.#value = value
    this.#tileElement.innerText = value
    const power = Math.log2(value)
    const backgroundLightness = 100 - power * 8
    this.#tileElement.style.setProperty(
      '--background-lightness',
      `${backgroundLightness}%`
    )
    this.#tileElement.style.setProperty(
      '--color-lightness',
      `${backgroundLightness <= 50 ? 70 : 40}%`
    )
  }

  get value(){
    return this.#value
  }

  get tileElement(){
    return this.#tileElement
  }

  set row(value){
    this.#row = value
    this.#tileElement.style.setProperty('--row', value)
  }

  set col(value){
    this.#col = value
    this.#tileElement.style.setProperty('--col', value)
  }

  remove(){
    this.#tileElement.remove()
  }

  waitForTransition(){
    return new Promise(resolve => {
      this.#tileElement.addEventListener('transitionend', resolve, {once: true})
    })
  }
}
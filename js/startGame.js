import Grid from "./Grid.js"



export default () => {
  const container = document.getElementById('container')
  let gridElement = document.getElementById('game')
  if(!gridElement){
    const grid = document.createElement('div')
    grid.id = 'game'
    container.append(grid)
    gridElement = grid
  }
  const grid = new Grid(gridElement)
  grid.createTileInRandomCell()
  grid.createTileInRandomCell()

  return grid
}
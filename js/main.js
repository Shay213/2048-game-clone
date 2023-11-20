import Grid from "./Grid.js"
import moveTiles from './moveTiles.js'

const gridElement = document.getElementById('game')

const grid = new Grid(gridElement)
grid.createTileInRandomCell()
grid.createTileInRandomCell()

const keyDownOnce = () => window.addEventListener('keydown', handleKeyDown, {once: true})

function handleKeyDown(e){
  switch(e.key){
    case 'ArrowUp':
      moveTiles(grid.cellsByCol)
      grid.createTileInRandomCell()
      break
    case 'ArrowDown':
      moveTiles(grid.cellsByCol.map(col => col.reverse()))
      grid.createTileInRandomCell()
      break
    case 'ArrowLeft':
      moveTiles(grid.cellsByRow)
      grid.createTileInRandomCell()
      break
    case 'ArrowRight':
      moveTiles(grid.cellsByRow.map(row => row.reverse()))
      grid.createTileInRandomCell()
      break
    default:
      keyDownOnce()
      return
  }

  grid.cells.forEach(cell => cell.mergeTiles())

  keyDownOnce()
}

keyDownOnce()


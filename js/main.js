import Grid from "./Grid.js"
import moveTiles from './moveTiles.js'

const gridElement = document.getElementById('game')

const grid = new Grid(gridElement)
grid.createTileInRandomCell()
grid.createTileInRandomCell()

const keyDownOnce = () => window.addEventListener('keydown', handleKeyDown, {once: true})

async function handleKeyDown(e){
  switch(e.key){
    case 'ArrowUp':
      await moveTiles(grid.cellsByCol)
      break
    case 'ArrowDown':
      await moveTiles(grid.cellsByCol.map(col => col.reverse()))
      break
    case 'ArrowLeft':
      await moveTiles(grid.cellsByRow)
      break
    case 'ArrowRight':
      await moveTiles(grid.cellsByRow.map(row => row.reverse()))
      break
    default:
      keyDownOnce()
      return
  }

  grid.cells.forEach(cell => cell.mergeTiles())
  grid.createTileInRandomCell()

  keyDownOnce()
}

keyDownOnce()


import Grid from "./Grid.js"
import moveTiles from './moveTiles.js'
import canMoveTiles from "./canMoveTiles.js"

const gridElement = document.getElementById('game')

const grid = new Grid(gridElement)
grid.createTileInRandomCell()
grid.createTileInRandomCell()

const keyDownOnce = () => window.addEventListener('keydown', handleKeyDown, {once: true})

const canMoveUp = () => canMoveTiles(grid.cellsByCol)
const canMoveDown = () => canMoveTiles(grid.cellsByCol.map(col => col.reverse()))
const canMoveLeft = () => canMoveTiles(grid.cellsByRow)
const canMoveRight = () => canMoveTiles(grid.cellsByRow.map(row => row.reverse()))

async function handleKeyDown(e){
  switch(e.key){
    case 'ArrowUp':
      if(!canMoveUp()){
        keyDownOnce()
        return
      }
      await moveTiles(grid.cellsByCol)
      break
    case 'ArrowDown':
      if(!canMoveDown()){
        keyDownOnce()
        return
      }
      await moveTiles(grid.cellsByCol.map(col => col.reverse()))
      break
    case 'ArrowLeft':
      if(!canMoveLeft()){
        keyDownOnce()
        return
      }
      await moveTiles(grid.cellsByRow)
      break
    case 'ArrowRight':
      if(!canMoveRight()){
        keyDownOnce()
        return
      }
      await moveTiles(grid.cellsByRow.map(row => row.reverse()))
      break
    default:
      keyDownOnce()
      return
  }

  grid.cells.forEach(cell => cell.mergeTiles())
  await grid.createTileInRandomCell()

  if(!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()){
    alert("You lose")
    return
  }

  keyDownOnce()
}

keyDownOnce()


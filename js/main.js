
import moveTiles from './moveTiles.js'
import canMoveTiles from "./canMoveTiles.js"
import startGame from './startGame.js'

const newGameBtn = document.getElementById('new-game')

let grid = startGame()

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

newGameBtn.addEventListener('click', async () => {
  try {
    await new Promise((resolve, reject) => {
      const modal = document.createElement('div')
      modal.classList.add('modal')
      modal.innerHTML = `
          <div>Are you sure you want to start new game?</div>
          <button id="okButton">OK</button>
          <button id="cancelButton">Cancel</button>
      `;
      document.body.appendChild(modal);
      document.getElementById('okButton').addEventListener('click', () => {
        document.body.removeChild(modal);
        resolve();
      });
  
      document.getElementById('cancelButton').addEventListener('click', () => {
        document.body.removeChild(modal);
        reject();
      });
    })
    grid.remove()
    grid = startGame()
  } catch (error) {
    // nothing
  }
})

keyDownOnce()


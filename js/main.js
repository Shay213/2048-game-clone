import Grid from "./Grid.js"

const gridElement = document.getElementById('game')

const grid = new Grid(gridElement)
grid.createTileInRandomCell()
grid.createTileInRandomCell()

const keyDownOnce = () => window.addEventListener('keydown', handleKeyDown, {once: true})

function handleKeyDown(e){
  switch(e.key){
    case 'ArrowUp':
      // move if possible, merge if possible, add new tile in radom place if possible
      moveUp(grid.cellsByCol)
      grid.createTileInRandomCell()
      break
    case 'ArrowDown':
      //grid.createTileInRandomCell()
      break
    case 'ArrowLeft':
      //grid.createTileInRandomCell()
      break
    case 'ArrowRight':
      //grid.createTileInRandomCell()
      break
    default:
      keyDownOnce()
      return
  }

  grid.cells.forEach(cell => cell.mergeTiles())

  keyDownOnce()
}

function moveUp(cellsByCol){
  move(cellsByCol)
}

function move(cells){
  cells.forEach(group => {
    for(let i = 1; i < group.length; i++){
      if(group[i].tile === null) continue
      
      let lastValid
      for(let j = i-1; j >= 0; j--){
        if(!group[j].canAccept(group[i].tile)) break
        lastValid = group[j]
      }
      
      if(lastValid){
        if(lastValid.tile !== null){
          lastValid.mergeTile = group[i].tile
        } else{
          lastValid.tile = group[i].tile
        }
        group[i].tile = null
      }
    }
  })
}

keyDownOnce()


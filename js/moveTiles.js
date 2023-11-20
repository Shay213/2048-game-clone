export default (cells) => {
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

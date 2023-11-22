export default (cells) => {
  return cells.some(group => {
    return group.some((cell, i) => {
      return i === 0 || cell.tile === null ? false : group[i - 1].canAccept(cell.tile)
    })
  })
}
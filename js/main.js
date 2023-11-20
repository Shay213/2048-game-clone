import Grid from "./Grid.js"

const gridElement = document.getElementById('game')

const grid = new Grid(gridElement)
grid.createTileInRandomCell()
grid.createTileInRandomCell()
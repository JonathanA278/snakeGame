// import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
// import { update as updateFood, draw as drawFood } from './food.js'
// import { outsideGrid } from './grid.js'

// let lastRenderTime = 0
// let gameOver = false
// const gameBoard = document.getElementById('game-board')

// function main(currentTime) {
//   if (gameOver) {
//     if (confirm('You lost. Press ok to restart.')) {
//       window.location = '/'
//     }
//     return
//   }


//   window.requestAnimationFrame(main)
//   const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
//   if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


//   lastRenderTime = currentTime

//   update()
//   draw()
// }

// window.requestAnimationFrame(main)

// function update() {
//   updateSnake()
//   updateFood()
//   checkDeath()
// }

// function draw() {
//   gameBoard.innerHTML = ''
//   drawSnake(gameBoard)
//   drawFood(gameBoard)
// }

// function checkDeath() {
//   gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
// }

import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')
const gameOverElement = document.createElement('div')
gameOverElement.classList.add('game-over')
gameOverElement.textContent = 'Game Over! Press OK to Restart.'
document.body.appendChild(gameOverElement)

function main(currentTime) {
  if (gameOver) {
    gameOverElement.classList.add('show') // Display game over screen
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/'
    }
    return
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

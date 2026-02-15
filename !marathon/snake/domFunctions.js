export function showGameOver() {
  document.querySelector('.game-over').classList.remove('hidden');
}

export function drawSnakeCell(x, y) {
  document.getElementById(`cell-${x}-${y}`).classList.add('snake');
}

export function eraseSnakeCell(x, y) {
  document.getElementById(`cell-${x}-${y}`).classList.remove('snake');
}

export function drawApple(x, y) {
  document.getElementById(`cell-${x}-${y}`).classList.add('apple');
}

export function eraseApple(x, y) {
  document.getElementById(`cell-${x}-${y}`).classList.remove('apple');
}

export function showPaused() {
  document.querySelector('.pause').classList.remove('hidden');
}

export function hidePaused() {
  document.querySelector('.pause').classList.add('hidden');
}
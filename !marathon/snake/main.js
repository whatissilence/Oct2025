import { addSnakeToField, createHtmlForField, generateField, generateSnake } from './initFunctions.js';
import {
  drawApple,
  drawSnakeCell,
  eraseApple,
  eraseSnakeCell,
  hidePaused,
  showGameOver,
  showPaused
} from './domFunctions.js';

const FIELD_WIDTH = 20;
const FIELD_HEIGHT = 20;
export const CELL = {
  EMPTY: 0,
  SNAKE: 1,
  APPLE: 2
}

const DIRECTION = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
}

const container = document.getElementById('snakeContainer');

// Generating field logically
let dir = DIRECTION.RIGHT;
let intervalId = null;
let isPaused = false;
let isOver = false;

let field = generateField(FIELD_WIDTH, FIELD_HEIGHT);
let snake = generateSnake(FIELD_HEIGHT);


createHtmlForField(container, FIELD_WIDTH, FIELD_HEIGHT);
addSnakeToField(field, snake);

let apple = generateApple();

subscribeToButtons();
start();

console.log('field', field);
console.log('snake', snake);

// ==========================================
function subscribeToButtons() {
  document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowUp') {
      dir = DIRECTION.UP;
    } else if (event.code === 'ArrowDown') {
      dir = DIRECTION.DOWN;
    } else if (event.code === 'ArrowLeft') {
      dir = DIRECTION.LEFT;
    } else if (event.code === 'ArrowRight') {
      dir = DIRECTION.RIGHT;
    } else if (event.code === 'Space') {
      if (isOver) {
        return;
      }

      if(!isPaused) {
        stop();
        showPaused();
      } else {
        hidePaused();
        start();
      }
      isPaused = !isPaused;
    }
  })
}

function start() {
  intervalId = setInterval(() => {
    moveSnake(dir, snake, field);
  }, 500); // 0.5 sec
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function moveSnake(dir, snake, field) {
  const headCoord = snake[snake.length - 1];
  const futureHeadCoord = {
    x: headCoord.x,
    y: headCoord.y,
  }

  if (dir === DIRECTION.RIGHT) {
    futureHeadCoord.x++; // futureHeadCoord.x = futureHeadCoord.x + 1;
  } else if (dir === DIRECTION.LEFT) {
    futureHeadCoord.x--;
  } else if (dir === DIRECTION.DOWN) {
    futureHeadCoord.y++;
  } else if (dir === DIRECTION.UP) {
    futureHeadCoord.y--;
  }

  if(checkGameOver(futureHeadCoord.x, futureHeadCoord.y)) {
    return;
  }

  const isAppleEaten = futureHeadCoord.x === apple.x && futureHeadCoord.y === apple.y;

  snake.push(futureHeadCoord);
  field[futureHeadCoord.y][futureHeadCoord.x] = CELL.SNAKE;
  drawSnakeCell(futureHeadCoord.x, futureHeadCoord.y)

  if (!isAppleEaten) {
    const tailCoord = snake.shift();
    field[tailCoord.y][tailCoord.x] = CELL.EMPTY;
    eraseSnakeCell(tailCoord.x, tailCoord.y);
  } else {
    eraseApple(apple.x, apple.y);
    apple = generateApple();
  }
}

function checkGameOver(x, y) {
  if (x >= FIELD_WIDTH || x < 0 || y >= FIELD_HEIGHT || y < 0) {
    isOver = true;
  }

  const intersection = snake.find(coord => coord.x === x && coord.y === y)
  if (intersection) {
    isOver = true;
  }

  if (isOver) {
    showGameOver();
    clearInterval(intervalId);
    intervalId = null;
  }

  return isOver;
}

function generateApple() {
  const freeCells = [];
  field.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      if (cell === CELL.EMPTY) {
        freeCells.push({ x: cellIndex, y: rowIndex });
      }
    })
  })

  if(freeCells.length === 0) {
    showGameOver();
    clearInterval(intervalId);
    intervalId = null;
  }

  const randomCellIndex = randomIntFromInterval(0, freeCells.length - 1);
  const apple = freeCells[randomCellIndex];

  field[apple.y][apple.x] = CELL.APPLE;
  console.log('apple', apple);
  drawApple(apple.x, apple.y);

  return {
    x: apple.x,
    y: apple.y,
  }
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

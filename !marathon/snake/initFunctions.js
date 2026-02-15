import { CELL } from './main.js';
import { drawSnakeCell } from './domFunctions.js';

export function generateField(width, height) {
  let fld = new Array(height).fill(0);
  fld = fld.map(_ => new Array(width).fill(0));
  return fld;
}

export function generateSnake(height) {
  const startingSnakeLength = 3;
  const snakeY = Math.floor(height / 2) - 1; // search half of height index
  let snk = new Array(startingSnakeLength).fill(null);
  snk = snk.map((_, i) => ({x: i, y: snakeY}));
  return snk;
}

export function addSnakeToField(field, snake) {
  snake.forEach(coord => {
    field[coord.y][coord.x] = CELL.SNAKE;
    drawSnakeCell(coord.x, coord.y);
  })
}

export function createHtmlForField(cont, width, height) {
  let htmlText = '<table class="field">';
  for (let i = 0; i < height; i++) {
    htmlText = htmlText + '<tr>'

    for (let j = 0; j < width; j++) {
      htmlText = htmlText + `<td id="cell-${j}-${i}"></td>`;
    }

    htmlText = htmlText + '</tr>'
  }

  htmlText = htmlText + '</table>';
  cont.innerHTML = htmlText;

  const fieldTable = document.querySelector('.field');
  document.querySelector('.container').setAttribute(
    'style',`width:${fieldTable.offsetWidth}px; height: ${fieldTable.offsetHeight}px`
  );
}

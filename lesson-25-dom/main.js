'use strict';

// Робота з локалстореджом ==================
const person = {
  name: 'Stanislav',
  email: 'stanislav@email.com',
  age: 28
}

// перетворюємо обʼєкт на строку
let str = JSON.stringify(person);
// зберігаємо в локалстореджі
localStorage.setItem('myStudent', str)


// Читаємо з локалстореджу строку
let strFromLoc = localStorage.getItem('myStudent')

// Парсимо її назад в обʼєкт
try {
  let human = JSON.parse(strFromLoc)
  console.log('human', human);
} catch (error) {
  console.log('Не можу розпарсити строку')
  console.log('error', error);
}

// ====================================

const myElement = document.getElementById('specialText');

// myElement.classList.add('warning-text') // Додати клас
// myElement.classList.remove('warning-text') // Видалити клас
// myElement.classList.toggle('warning-text') // Переключити клас

setInterval(function() {
  myElement.classList.toggle('warning-text')
}, 5000)

myElement.style.padding = '50px'
myElement.style.border = '2px dashed black'

// ====================================
const clElems = document.getElementsByClassName('my-super-title')
const clElemsArr = Array.from(clElems)

clElemsArr.forEach((elem) => {
  elem.style.color = '#009999'
})

// ====================================
document.querySelectorAll('input[type=checkbox]:checked')

// ====================================

const h1 = document.getElementsByTagName('h1')[0]
h1.innerText = 'Hello world!!!'
h1.innerHTML = '<i>Hello world!!!</i>'


// ====================================

function runClock() {
  const clockContainer = document.getElementById('clock-container');
  const clockNumbers = clockContainer.getElementsByTagName('span');

  const hourSpan = clockNumbers[0];
  const minuteSpan = clockNumbers[1];
  const secondSpan = clockNumbers[2];

  setInterval(() => {
    const current = new Date();
    hourSpan.innerText = String(current.getHours()).padStart(2,'0');
    minuteSpan.innerText = String(current.getMinutes()).padStart(2,'0');
    secondSpan.innerText = String(current.getSeconds()).padStart(2,'0');
  }, 1000);
}

runClock();

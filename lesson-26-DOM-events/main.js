'use strict';

const exampleElement = document.getElementById('exampleBlock');

exampleElement.addEventListener('mouseover', function(event) {
  console.log('mouseover', event, event.target);
})

// exampleElement.addEventListener('mousemove', function(event) {
//   console.log('mousemove', event, event.target);
// })

window.addEventListener('resize', function(event) {
  console.log('resize', window.innerWidth, window.innerHeight);
})

// ============================
function alwaysWorking(event){
  console.log('alwaysWorking', event, event.target);
}

function temporary(event) {
  console.log('temporary', event, event.target);
}

exampleElement.addEventListener('click', alwaysWorking)
exampleElement.addEventListener('click', temporary)

exampleElement.addEventListener('mouseout', function(event) {
  console.log('mouseout', event, event.target);
  exampleElement.removeEventListener('click', temporary)
  console.log('UNSUBSCRIBE happened')
})

// ===================================================
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function getRandomColor() {
  const red = getRandomNumber(0, 255).toString(16).padStart(2, '0');
  const green = getRandomNumber(0, 255).toString(16).padStart(2, '0');
  const blue = getRandomNumber(0, 255).toString(16).padStart(2, '0');
  return `#${red}${green}${blue}`;
}

function changeBackColor(element, color) {
  element.style.backgroundColor = color;
}

function changeText(element, text) {
  element.innerText = text;
}

const colored = document.getElementById('coloredDiv');

const handleMouseOver = (event) => {
  const hex = getRandomColor();
  changeBackColor(event.target, hex);
  changeText(event.target, hex);
}

colored.addEventListener('mouseover', handleMouseOver)

// ===================================================

const son = document.getElementById('son');
const father = document.getElementById('father');
const grandfather = document.getElementById('grandfather');

grandfather.addEventListener('click', function() {
  grandfather.style.backgroundColor = 'lightcoral';
})

father.addEventListener('click', function(event) {
  event.stopPropagation();
  father.style.backgroundColor = 'lightblue';
})

son.addEventListener('click', function(event) {
  event.stopPropagation(); // перервати спливання
  son.style.backgroundColor = 'lightgreen';
})
// ===================================================

const emailElement = document.getElementById('email');
const validateButtonElement = document.getElementById('validateButton');

function handleEmailValidate(event) {
  event.preventDefault(); // відмінити поведінку за замовчуванням

  if (emailElement.value.trim().includes('@')) {
    emailElement.style.borderColor = 'green';
  } else {
    emailElement.style.borderColor = 'red';
  }
}

validateButtonElement.addEventListener('click', handleEmailValidate);
emailElement.addEventListener('keydown', function(event) {
  console.log(event);
});

// ===================================================

// const checkboxElements = document.querySelectorAll('input[type="checkbox"]');
// const checkboxElementsArr = Array.from(checkboxElements);
//
// checkboxElementsArr.forEach(checkbox => {
//   checkbox.addEventListener('change', function(event) {
//     console.log(event.target, event.target.value);
//   })
// })

const checkboxContainer = document.getElementById('checkboxContainer');

checkboxContainer.addEventListener('click', function(event) {
  if (event.target.type === 'checkbox') {
    console.log('checkboxContainer click', this, event);
  }

  if (event.target.classList.contains('pretty-check')) {
    console.log('checkboxContainer click by class', this, event);
  }
})


// ===================================================
const redOneElement = document.getElementById('redOne');
let redOneX = 0;
let redOneY = 0;

document.body.addEventListener('keydown', function(event) {
  console.log(event);
  if (event.key === 'ArrowLeft') {
    redOneX = event.shiftKey ? redOneX - 20 : redOneX - 5;
    redOneElement.style.left = `${redOneX}px`;
  } else if (event.key === 'ArrowRight') {
    redOneX = event.shiftKey ? redOneX + 20 : redOneX + 5;
    redOneElement.style.left = `${redOneX}px`;
  } else if (event.key === 'ArrowDown') {
    redOneY = event.shiftKey ? redOneY + 20 : redOneY + 5;
    redOneElement.style.top = `${redOneY}px`;
  } else if (event.key === 'ArrowUp') {
    redOneY = event.shiftKey ? redOneY - 20 : redOneY - 5;
    redOneElement.style.top = `${redOneY}px`;
  }
})
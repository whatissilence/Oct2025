'use strict';


// let promptResult = prompt('How old are you?');
// let userAge = Number(promptResult);
//
// if (userAge <= 5) {
//   console.log('You are so young and cute');
// } else {
//   console.log('You are so wise' );
// }


// ====================
// let promptResult2 = prompt('How old are you?');
//
// console.log(promptResult2);
// if (promptResult2 != null) {
//   let userAge2 = Number(promptResult2);
//   console.log(`Вам через рік буде ${userAge2 + 1} років`);
// } else {
//   console.log('Шкода, що ви не захотіли ввести свій вік');
// }

// ====================

// let myAge = Number(prompt('Please enter your age'));
//
// if (Number.isNaN(myAge)) {
//   console.log('Ви ввели не число');
// } else {
//   console.log('Через рік вам буде ', myAge + 1);
// }

// ====================
const city = 'Kyiv';

// if (city === 'Kyiv') {
//   console.log('You are living in the capital of Ukraine');
// } else if (city === 'Lviv') {
//   console.log('You are living in the western Ukraine');
// } else if (city === 'Odessa') {
//   console.log('You are living in the city of humor');
// } else {
//   console.log(`You are living in ${city}`);
// }

switch (city) {
  case 'Kyiv':
    console.log('You are living in the capital of Ukraine');
    break;
  case 'Lviv':
    console.log('You are living in the western Ukraine');
    break;
  case 'Odessa':
    console.log('You are living in the city of humor');
    break;
  default:
    console.log(`You are living in ${city}`);
}

// ====================
const myStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let result = 0;

for (let i = 0; i < myStr.length; i++) {
  console.log('In operator for', myStr[i])
  result = result + i;
}

console.log('Result is ', result);


// ====================

for (let i = 0; i < 5; i++) {
  console.log(`Outer loop i=${i}`);

  for (let j = 1; j <= 3; j++) {
    console.log(`   Inner loop j=${j}`);
  }
}

// ==================== GUESSING GAME
// let secretNumber = Math.floor(Math.random() * 10) + 1; // random number between 1 and 10
//
// let counter = 1;
// let num = -1;
//
// while (num !== secretNumber && counter <= 3) {
//   num = Number(prompt(`Guess the number! It's ${counter} attempt`));
//   counter++;
// }
//
// if (num === secretNumber) {
//   console.log('GOOOOOOD!');
// } else {
//   console.log('OOOOPS!');
// }

// ====================

function sayHello(name) {
  console.log(`Hello ${name}!`);
}

sayHello('Kateryno');
sayHello('Illia');
sayHello('Sofiia');

// ====================

function getRandFromTo(min, max) {
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return rand;
}

console.log(getRandFromTo(1, 10));
console.log(getRandFromTo(40, 50));
console.log(getRandFromTo(1, 100));
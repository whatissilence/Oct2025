'use strict';

console.log('Works!');

let companyName = 'Umbrella Corp';

console.log(companyName[4])

function greet(name, age, isBigLetters = false) {
  let nameToShow;

  if (isBigLetters) {
    nameToShow = name.toUpperCase();
  } else {
    nameToShow = name;
  }

  console.log(`Hello, my name is ${nameToShow} and I am ${age} years old.`);
}

greet('Alice', 19);
greet('Bob', 25);

greet('Marley', 30);

// =======================================

function searchInString(text, searchTerm, isCaseInsensitive = true) {
  let foundIndex;

  if (text === '') {
    return false;
  }

  if (searchTerm === '') {
    return false;
  }

  if (isCaseInsensitive) {
    let smallText = text.toLowerCase();
    let smallSearchTerm = searchTerm.toLowerCase();

    foundIndex = smallText.indexOf(smallSearchTerm);
  } else {
    foundIndex = text.indexOf(searchTerm);
  }

  return foundIndex !== -1;
}

// const text = prompt('Введіть текст в якому я буду шукати');

console.log(     searchInString('Hello, world!', 'world')      );
console.log(     searchInString('Quick brown fox', 'dog')      );

// console.log(searchInString(text, 'BROWN'));



document.write(    sum(3, 5)    /    minus(20, 18)     );

const myArray = [1, 2, 3, 4, 5];
console.log(     myArray[3]    );

const person = {
  name: 'John',
  lastName: 'Wick',
  email: 'john@gmail.com',
  greet: function () {
    console.log('Hello I\'m John Wick!')
  }
}

person.greet();

function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

console.log( multiply(3, 5) );


(function () {
  console.log('Hello from IIFE function')
}) ();

// =============================================

function addColons(text) {
  return `::::::: ${text} :::::::`;
}

function addEquals(text) {
  return `======= ${text} =======`;
}

function addPluses(text) {
  return `+++++++ ${text} +++++++`;
}

function makeBigLetters(text) {
  return text.toUpperCase();
}

function logger(text, formatter) {
  console.log('Logger says:', formatter(text));
}

logger('Viktoriia', addColons);
logger('Kateryna', addEquals);
logger('Anna', addPluses);
logger('Sofiia', makeBigLetters);

// =========================================
const userAges = [5, 8, 21, 45, 18, 101, 88, 12, 64, 58, 11]

const childrenAges = userAges.filter(isAgeUnder18);
const agedAges = userAges.filter( function (a) { return a >= 85 } );

console.log('Children:', childrenAges);
console.log('Aged:', agedAges);

function isAgeUnder18(age) {
  return age < 18;
}

function isAgeOver85OrLess25(age) {
  return age >= 85 || age <= 25;
}


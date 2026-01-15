'use strict';

// console.log('start')
// let isLoading = false;
//
// try {
//   let a = 5; // get geolocation
//   isLoading = true;
//   a.toLowerCase(); // send request for weather
//
//   console.log('Show weather')
// } catch (error) {
//   console.log(error.message);
//   console.log('Weather is temporarily unavailable');
// } finally {
//   isLoading = false;
// }
//
function divide(a,b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Хибні аргументи в функції divide!!!');
  }

  return a / b;
}
//
// console.log(divide(10, 2));
// console.log(divide('Red', 'tomato'));
//
// console.log('end')

// =================================

// function main() {
//   let counter = 0;
//
//   return function() {
//     counter = counter + 5;
//     console.log('counter: ', counter);
//   };
// }
//
// const superFunc = main();
// superFunc();
// superFunc();

// ================================

function createLikesCounter() {
  let amount = 0;

  return {
    getCounter: function() {
      return amount;
    },
    like: function () {
      amount = amount + 1;
      return amount;
    },
    dislike: function () {
      amount = amount - 1;

      if (amount < 0) {
        amount = 0;
      }
      return amount;
    },
  };
}

const myCounter = createLikesCounter();
myCounter.like();
myCounter.like();
myCounter.like();

myCounter.dislike();
myCounter.dislike();
myCounter.dislike();
myCounter.dislike();
myCounter.dislike();

const actualData = myCounter.getCounter();
console.log('actualData', actualData);


const anotherCounter = createLikesCounter();
anotherCounter.like();
anotherCounter.like();
anotherCounter.like();
anotherCounter.like();

console.log('Another: ', anotherCounter.getCounter());
console.log(myCounter.getCounter());

// ===================================

function myFunction() {
  return 'Hello' + 'from myFunction'
}

const myFunction2 = function () {
  return 'Hello' + 'from myFunction2'
}

const shortFunction = () => 'Hello' + ' from shortFunction';

const makeSquare = num => num * num;
const sum = (a, b) => a + b;

const showAdult = (age) => {
  if (age < 18) {
    console.log('You are child')
  } else {
    console.log('You are adult')
  }
  return age;
}

showAdult(15);
showAdult(45);

const makePerson = (name, sec, age, gend) => ({
  name: name,
  secondName: sec,
  age: age,
  gender: gend,
  greet: () => {
    console.log(`Hello`)
  }
});

const personOleksii = makePerson('Oleksii', 'Pavlenko', 42, 'male');
const personJohn = makePerson('John', 'Wick', 35, 'male');
const personMary = makePerson('Mary', 'Curie', 29, 'female');

console.log(personOleksii);

personJohn.greet();

function repeat(num, func) {
  for(let i = 1; i <= num; i++) {
    func();
  }
}

repeat(15, () => console.log('hehe'));





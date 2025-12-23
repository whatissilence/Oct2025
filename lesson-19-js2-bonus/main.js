"use strict";

let companyName = 'Versele Laga';

companyName = companyName.toUpperCase();

console.log(companyName.toUpperCase());
console.log(companyName)
console.log(companyName.length)

let myAge = 42;

console.log(myAge.toFixed(2));

const colors = ['red', 'blue', 'green', 'yellow', 'darkred', 'darkgreen', 'lightblue'];
const randomIndex = Math.floor(Math.random() * colors.length);

console.log(`Index: ${randomIndex}, color: ${colors[randomIndex]}`)

const userType = 'admin';
const userName = 'admin';
const nickname = 'qwe#rty';
const email = 'qweqweqweqwe.com';
const password = '123qwe';


if (
  (email.includes('@') && email.includes('.')) // false
  ||
  (userType === 'admin' && userName === 'admin') // true
) {
  console.log('Proceed with registration!')
} else {
  console.log('Cannot register you!')
}

if (!nickname.includes('%') && !nickname.includes('$') && !nickname.includes('#')) {
  console.log('Nickname is ok!')
} else {
  console.log('Alarm. Nickname is bad.')
}

if (password === '' || password.length <= 3) {
  console.log('RED color.');
} else if (!password.includes('1') && !password.includes('2')) {
  console.log('YELLOW color.');
} else {
  console.log('GREEN color.');
}

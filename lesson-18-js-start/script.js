"use strict";

/*
const userAge = Number(   prompt("Enter your age") );

if (userAge >= 18) {
  console.log('You are an adult. Welcome!');
}

if (userAge < 18) {
  console.log('You are not allowed to smoke.');
}
*/

const userName = 'Oleksii';
const userEmail = "oleksii@mysite.com";
const age = 42.5;
const isAdmin = false;

let duplicatedUser = null;

const myStudents = [ 'Kate', 'Anna', 'Illia', 'Dima', 'Stanislav', 'Nazar', 'Max', 'Alex', 'Sofia', 'Viktoriia' ];

const someData = [ 33, 'aaa', true, null, 'hello', 12.7 ]; // може існувати масив з різними типами даних, але я не раджу

console.log(myStudents[3])

const person = {
  email: 'oleksii@mysite.com',
  name: 'Oleksii',
  age: 42,
  isAdmin: false
}

console.log(person.name, person.age);

let balance = 123.546678;
let balanceForUser = balance.toFixed(2);

console.log(balanceForUser);




















const h1Element = document.getElementsByTagName('h1')[0];

const changeText = ()  => {
  h1Element.innerHTML = 'Weeeeeeeeeee!!!!!' + userName;
}

const timeoutMsec = 10000;

setTimeout(changeText, timeoutMsec);
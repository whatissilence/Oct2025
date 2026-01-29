'use strict';

const balance = 10000;

// let greetingText = '';
//
// if (balance >= 10000) {
//   greetingText = `Вітаю VIP користувач`
// } else {
//   greetingText = `Вітаю користувач`
// }
//
// let greetingText = balance >= 10000 ? 'Вітаю VIP користувач' : 'Вітаю користувач';
//
// console.log(greetingText);
//
// function getUserNameColor(money) {
//   return money < 10000 ? 'black' : 'gold';
// }
//
// console.log(getUserNameColor(balance));
//
// // ====================================
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const defaultUser = {
//   name: 'Stranger',
//   age: 22,
//   email: 'stranger@gmail.com',
// }
//
// // const person = JSON.parse(JSON.stringify(defaultUser));
// const person = structuredClone(defaultUser);
//
// // Object.freeze(person);
//
// person.name = 'John Wick';
// person.age = 40;
// person.dog = 'Spike';
//
// console.log(person)
// console.log(defaultUser)
//
// arr.forEach((item) => {
//   console.log(item);
// })
//
// console.log(Object.keys(person))
// console.log(Object.values(person))
//
// Object.keys(person).forEach(key => {
//   console.log(key, person[key]);
// })
//
// // ======================================
//
// function isAdult(person) {
//   return person.age >= 18
// }
//
// const isShortAdult = person => person.age >= 18;
//
// console.log(isShortAdult(person))
// //
// // function getUserNameColor(money) {
// //   return money < 10000 ? 'black' : 'gold';
// // }
//
// const getColor = money => money < 10000 ? 'black' : 'gold';
//
// console.log(getColor(person))
//
// const getMaximum = (a, b) => (b < a ? a : b);
//
// console.log('maxNumber', getMaximum(3, 200));

// ======================================
const users = [
  {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
  },
  {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
  },
  {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
  },
  {
    "index": 3,
    "isActive": true,
    "balance": "$4,233.78",
    "name": "Suzette Lewis",
    "gender": "male",
    "phone": "+1 (995) 587-3985",
    "address": "920 Seba Avenue, Osage, Alabama, 6290"
  },
  {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
  },
  {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
  },
  {
    "index": 6,
    "isActive": false,
    "balance": "$690.56",
    "name": "Pauline Galle=gos",
    "gender": "female",
    "phone": "+1 (837) 235-8462",
    "address": "212 Seba Avenue, Osage, Alabama, 3234"
  },
  {
    "index": 7,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
  }
];

const allNames = users.map(user => user.name);
console.log('allNames', allNames)

console.log(allNames.map(name => name.toUpperCase()));

const females = users.filter( user => user.gender === 'female' )
console.log('females', females)

const namesOfAlabamians = users
  .filter( user => user.address.includes('Alabama') )
  .map( user => user.name);

console.log('namesOfAlabamians', namesOfAlabamians)

// users.forEach( (user, index) => {
//   console.log('index', index);
//   console.log('user', user);
// });

console.log( users.map(user => user.name).join(' ; '))

const nums = [12, 45, 2, 13, 33, 362, 128, 5]

nums.sort( (a, b) => a - b );

console.log('nums', nums);

users.sort( (userNext, userPrev) => userNext.name.length - userPrev.name.length);
console.log('users', users)

const nameToFind = 'Suzette Lewis';

console.log( users.find(user => user.name === nameToFind))

const userNames = users.map( user => user.name.replaceAll(' ', '_').replaceAll('=', '_').toLowerCase())
console.log('userNames', userNames)

function getNumericBalance(text) {
  return Number(text.replaceAll('$', '').replaceAll(',', ''))
}

console.log(  getNumericBalance('$1,934.58') + 2 );



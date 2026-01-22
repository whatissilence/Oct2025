'use strict';

function square(a) {
  return a * a;
}

// 1 параметр - дужки не обовʼязково
const squareShort = a => a*a;

// -----
function compare(a, b) {
  return a > b;
}


// 2 параметри та більше - дужки обовʼязково
const compareShort = (a, b) => a > b;

// -----
function maybeApper(str) {
  if (str.length > 3) {
    return str.toUpperCase();
  }

  return str.toLowerCase();
}

// може мати тіло так, як велика функція
const maybeApperShort = (str) => {
  if (str.length > 3) {
    return str.toUpperCase();
  }

  return str.toLowerCase();
}
// -----

function makePerson(name, age, mylo) {
  return {
    name: name,
    age: age,
    email: mylo
  }
}

const makePersonShort = (name, age, mylo) => ({
  name: name,
  age: age,
  email: mylo
})

// console.log(square(3))
// console.log(squareShort(3))
// console.log(compareShort(3, 5))

console.log(makePerson('John', 32, 'john@example.com'))
console.log(makePersonShort('Mary', 28, 'mary@example.com'))

// ======================

const arr = ['aaa', 'bbb', 'ccc', 'ddd'];
const strFromArr = arr.join('-')
const arrFromStr = strFromArr.split('-');
const b = arr;

console.log('arr', arr)
console.log('arrFromStr', arrFromStr)
console.log(arr === arrFromStr) // false - масиви та обʼєкти схожі, але посилання на памʼять різні
console.log(arr === b) // true - дві змінних - посилання на один і той самий обʼєкт

// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i])
// }

const students = [
  'Sofiia',
  'Kate',
  'Vika',
  'Dima',
  'Nazar@',
  'Alex',
  'Stanislav@',
  'Oleksii'
];

//                 arr[i] , i
students.forEach((stName, index) => {
  console.log(`Hello, ${stName}! Your index is ${index}`)
});

const studentsUpper = students.map(str => str.toUpperCase());
console.log('studentsUpper', studentsUpper);

const mrsResult = students.map((name) => 'Mr(s) ' + name);
console.log('mrsResult', mrsResult);

const special = students.find(stName => stName.includes('@'));
console.log('special', special);

const maybeEmail = students.filter(stName => stName.includes('@'));
console.log('maybeEmail', maybeEmail);

const result = students
  .filter(stName => !stName.includes('@') )
  .map((name) => 'Mr(s) ' + name)
  .map(str => str.toUpperCase());

console.log('result', result);

const GENDERS = {
  MALE: 'male',
  FEMALE: 'female',
}

const persons = [
  { name: 'Sofiia', age: 20, gender: GENDERS.FEMALE },
  { name: 'Kate', age: 22, gender: GENDERS.FEMALE },
  { name: 'Vika', age: 24, gender: GENDERS.FEMALE },
  { name: 'Dima', age: 21, gender: GENDERS.MALE },
  { name: 'Nazar', age: 32, gender: GENDERS.MALE },
  { name: 'Alex', age: 33, gender: GENDERS.MALE },
  { name: 'Stanislav', age: 24, gender: GENDERS.MALE },
  { name: 'Oleksii', age: 42, gender: GENDERS.MALE },
];

console.log('Ladies', persons.filter(person => person.gender === GENDERS.FEMALE));

// :::::::::::::::::::::::::::::::::::::::::::::::::
console.log(':::::::::::::::::::::::::::::::::::::::::::::::::')
const nums = [ 3, 2, 1, 12, 222, 1200, 500]

console.log('nums.sort()', nums.sort()); // [1, 12, 1200, 2, 222, 3, 500]

// function mySortFu(next, prev) {
//   console.log(`prev: ${prev}, next: ${next}, return: ${next - prev}`);
//
//   return next - prev;
// }

console.log('nums.sort(func)', nums.sort((n, p) => n - p));
// Якщо просто по віку
console.log(persons.sort((nextPerson, prevPerson) => nextPerson.age - prevPerson.age))

console.log(
  'persons sorted',
  persons.sort((nextPerson, prevPerson) => { // nextPerson.age - prevPerson.age
    if (nextPerson.age !== prevPerson.age) {
      return nextPerson.age - prevPerson.age; // Вік не співпав, сортуємо по віку
    } else {
      if (nextPerson.name > prevPerson.name) { // Вік співпав сортуємо по імені
        return 1;
      } else {
        return -1;
      }
    }
  })
);

const anotherNums = [ 3, 2, 1, 12, 222, 1200, 500];
let sum = 0;
for (let i = 0; i < anotherNums.length; i++) {
  sum = sum + anotherNums[i];
}

console.log('sum', sum);

console.log(
  'sum2',
  anotherNums.reduce(
    (accumulator, element) => accumulator + element,
    0
  )
);






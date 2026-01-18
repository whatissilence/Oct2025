'use strict';

function greet (name = 'stranger') {
  return `Hello, ${name}`;
}

console.log(greet('Viktoriia'));
console.log(greet('Sofiia'));
console.log(greet());


function average(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let maybeNumber = Number(arr[i]);

    if(!Number.isNaN(maybeNumber)) {
      sum = sum + maybeNumber;
      count = count + 1
    }
  }

  return sum / count;
}

let myMass = [3, 5];
console.log(    average(myMass)  ); // 4
console.log(average([3, 5, 19, '40', undefined, undefined, undefined, undefined, 'abc', 1, 1, 1])); // ?

console.log('::::::::::::::::::::::::::::::::::::')

//
// let sum = 0;
// function test (param1, param2) {
//
//
//   sum = sum + param1;
//   sum = sum + param2;
//
//   console.log('sum', sum)
// }
//
// test(7, 5)
// test(20, 21)
// test(44, 55)
// console.log(sum)

console.log('::::::::::::::::::::::::::::::::::::')

function test (param1, param2) {
  let sum = 0;

  sum = sum + param1;
  sum = sum + param2;

  const inside = function(arg) {
    sum = sum + arg;
    console.log('=====>>>>', sum, arg)
  }

  return inside;
}

const any = test(7, 5)
any(42);
any(100);
any(200);
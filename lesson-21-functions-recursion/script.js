'use strict';

const personJohn = {
  name: 'John',
  lastName: 'Wick',
  email: 'john@gmail.com',
  age: 42,
  dogsName: 'Spiky'
}

const personMary = {
  name: 'Mary',
  lastName: 'Curie',
  age: 26
}

function showAgeIn10Years(anyPerson) {
  const insidePerson = structuredClone(anyPerson);
  insidePerson.age = insidePerson.age + 10;
  console.log(insidePerson.name, 'Через 10 років вам буде', insidePerson.age)
}

showAgeIn10Years(personJohn);
showAgeIn10Years(personMary);

console.log('end:', personJohn)
console.log('=======================')
// =======================================

// setTimeout(show, 5000)

function show() {
  console.log('show:')
}
console.log('=======================')
// =======================================

function isLessThanAndMoreZero(max, num) {
  return num < max && num > 0;
}


function createFunction(max) { // max = 1000

  const isLess = function(num) {
    return num < max && num > 0;
  }

  return isLess;
}

const isInWidth = createFunction(1024);
const isInHeight = createFunction(768);
const isCarAffordable = createFunction(1000);


// console.log(  isInWidth(10)  )
// console.log(  isInWidth(200)  )
// console.log(  isInWidth(500)  )
// console.log(  isInWidth(900)  )
// console.log(  isInWidth(1500)  )

console.log( isCarAffordable(3300) )

console.log('=======================')
// =======================================

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', '5'];

for (let i = 0; i < arr.length; i++) {
  const item = Number(arr[i]);
  console.log(i, item, !Number.isNaN(item));
}

console.log('=======================')
// =======================================

const projectFolder = [
  {
    name: 'assets',
    content: [
      'logo.svg',
      {
        name: 'styles',
        content: [
          'style.css',
          'variables.css',
          {
            name: 'minified',
            content: [
              'style.min.css'
            ]
          }
        ]
      },
      'main-styles.css'
    ]
  },
  'index.html',
  'script.js',
  '.gitignore',
  'gulpfile.js',
  'package.json',
  {
    name: 'src',
    content: [
      'style.scss',
      '_variables.scss',
    ]
  }
]

function showFolder(folder, deep = 0) {
  for (let i = 0; i < folder.length; i++) {
    const item = folder[i];

    if (typeof item === 'string') {
      console.log('  '.repeat(deep), 'file: ', item);
    } else {
      console.log('  '.repeat(deep), 'folder: ', item.name); // minified

      showFolder(item.content, deep + 1);
    }
  }
}

showFolder(projectFolder);















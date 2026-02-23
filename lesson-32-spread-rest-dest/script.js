const arr = [1,2,3,4,5];

// const first = arr[0];
// const second = arr[1];
// const third = arr[2];

const [ aaa,,,, eee = 0, fff = 0] = [ 1, 2, 3, 4, 5];

// console.log(aaa, eee, fff);
// console.log('arr', arr);

// ==============================
const person = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
  age: 40,
  gender: 'male'
}

// const firstname = person.firstName;
// const lastname = person.lastName;
// const email = person.email;

const { lastName, email, firstName, ...personFields } = person;
console.log(`firstName: ${firstName}; email: ${email}; lastName: ${lastName}`);
console.log('personField', personFields);

const personCopy = { ...person }; // копіювання обʼєкту на 1 рівень

// ==============================

const [one, two, three, ...qweqwe] = [1, 2, 3, 4, 5];
console.log('qweqwe', qweqwe)

const marks = [12, 11, 12, 12, 11, 10];

const marksCopy = [ ...marks ]; // копіювання масиву на 1 рівень. Якщо масив обʼєктів, це будуть ті ж самі обʼєкти
console.log('marks', marks);
console.log('marksCopy', marksCopy);

// ==============================
function getAverage(name, secondName, ...marks) {
  console.log(marks);
  const average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

  console.log('name, secondName, average');
  console.log(name, secondName, average.toFixed(2));
}

getAverage('Oleksii', 'Pavlenko', 3, 5, 6, 12, 8, 3);

// ==============================
const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];

//          [  1, 2, 3   'a', 'b', 'c' ]
const arr3 = [ ...arr1, ...arr2 ];

console.log('arr3', arr3);

// =============================

const defaultPerson = {
  firstName: 'stranger',
  lastName: 'no lastname',
  email: 'email@example.com',
  age: 18,
  gender: 'male'
}

const user = {
  firstName: 'Alex',
  email: 'alex@gmail.com',
  hobbies: ['sightseeing', 'hiking', 'biking']
}

const personToShow = {
  ...defaultPerson,
  ...user
}

console.log('personToShow', personToShow)

// personToShow.hobbies.push('drinking') // той самий масив. Для повної копії structuredClone
// console.log(user)


// =============================
const character = {
  name: 'Mary',
  secondName: 'Poppins',
  age: 30,
  gender: 'female',
  accessories: ['umbrella'],
  // address: {
  //   city: 'London',
  //   country: 'Great Britain',
  // }
}

console.log(character.address?.country);
console.log('End of the program')


// =============================

function normalFunc(name) {
  console.log('name', name);
  return `Hello, ${name}!`;
  console.log('name2', name);
}

normalFunc('Dima');

function* createGenFunction(i, num) {
  while (i < num) {
    yield i;
    i++;
  }
  return i;
}

const gen = createGenFunction(0, 9);

console.log('gen.next', gen.next())
console.log('gen.next', gen.next())
console.log('gen.next', gen.next())
console.log('gen.next', gen.next())
console.log('gen.next', gen.next())
console.log('gen.next', gen.next())
console.log('gen.next', gen.next())
console.log('gen.next', gen.next())
console.log('gen.next', gen.next())
console.log('gen.next', gen.next())
console.log('gen.next', gen.next())

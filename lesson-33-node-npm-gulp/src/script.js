
const arr = [1, 2, 3, 4, 5, 6];

console.log(arr);



const person = {
  name: 'John',
  email: 'john@gmail.com',
  age: 42,
  greeting: () => {
    console.log('Hello World');
  }
}

const { name, email, age, greeting } = person;

greeting();
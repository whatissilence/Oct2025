import { getGreetingText } from './functions.js';
import { getPersonDream, getPersonName } from './personUtilites.js';

const nazarPerson = {
  name: 'Nazar',
  age: '23',
  dream: 'Be happy!'
}

const name = getPersonName(nazarPerson)
console.log(getGreetingText(name))
console.log('Our friend dreams about: ', getPersonDream(nazarPerson))
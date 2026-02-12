import { validate } from './formFunctions.js';


const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  validate(e.target);
})
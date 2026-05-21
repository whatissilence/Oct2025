
// console.log('Process: ', process.argv)
// console.log('Vers: ', process.versions);

import person, { add, a } from './mod1.js';
import { mult } from './mod2.js';

const nodeVersion = Number(process.versions.node.split('.')[0]);

if (nodeVersion < 18) {
  throw new Error('Node version must be at least 18');
} else {
  console.log('Node version is', nodeVersion);
}

console.log('Process env', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  console.log('Node version is production');
}

console.log(Buffer.from('abcde', 'base64'));
console.log(Buffer.from('абвгґ', 'utf8'));

console.log(add(5,12))
console.log(person)
console.log(mult(100, 5))
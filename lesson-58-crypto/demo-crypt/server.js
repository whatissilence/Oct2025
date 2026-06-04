import bcrypt from 'bcrypt';

const password = '1111111111';

const hashPassword = bcrypt.hashSync(password, 12);

console.log('hashPassword', hashPassword);

const isValidPassword = bcrypt.compareSync(password, hashPassword);

console.log('isValidPassword', isValidPassword);


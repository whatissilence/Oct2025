import jwt from 'jsonwebtoken';

const secretKey = 'mySuperSecretKey';

const person = {
  name: 'John Wick',
  email: 'john@example.com',
  age: 42,
  pets: [
    {
      name: 'Spike',
      type: 'Dog'
    }
  ]
}

const options = {
  algorithm: 'HS512',
  expiresIn: '10s',
  audience: 'http://localhost:3000/',
}

const token = jwt.sign(person, secretKey, options);
console.log('token', token);
// Тут я токен відправляю на фронт енд

// ===============================================
const verifyOptions = {
  audience: 'http://localhost:3000/',
}

const tokenFromClient = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBXaWNrIiwiZW1haWwiOiJqb2huQGV4YW1wbGUuY29tIiwiYWdlIjo0MiwicGV0cyI6W3sibmFtZSI6IlNwaWtlIiwidHlwZSI6IkRvZyJ9XSwiaWF0IjoxNzgyNDExNzk5LCJleHAiOjE3ODI0MTE4MDksImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8ifQ.CcCFN9UcgFCZoix25zEucE1jIaS9MrQ3VAlySm7NJXOY8Zr1OvlhXDZX_1lt3D8INfyPlZjppxiuGLWR-0o8sA'
try {
  const decodedToken = jwt.verify(tokenFromClient, secretKey, verifyOptions);
  console.log('decodedToken', decodedToken);
} catch (e) {
  console.log('Failed to decode token:', e.message);
}

// Sign payload and return JWT asynchronously
function jwtSignAsync(payload, secretKey, options = {}) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretKey, options, (err, token) => {
      if (err || !token) return reject(err);
      resolve(token);
    });
  });
}

// Verify token and return decoded payload asynchronously
function jwtVerifyAsync(token, secretKey, options = {}) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, options, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded);
    });
  });
}
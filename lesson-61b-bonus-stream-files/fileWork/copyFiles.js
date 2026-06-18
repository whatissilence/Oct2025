import fs from 'node:fs';
import path, { dirname } from 'node:path';
import { Transform } from 'node:stream'
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Створюємо потік читання
const readStream = fs.createReadStream(path.join(__dirname, 'source.txt'));

// Створюємо потік запису
const writeStream = fs.createWriteStream(path.join(__dirname, 'destination.txt'));

const myTranformStream = new Transform({
  transform: function (chunk, encoding, callback) {
    const data = chunk.toString().replaceAll('і', '1').toUpperCase();
    this.push(data);
    callback();
  }
})

readStream.pipe(myTranformStream).pipe(writeStream);

readStream.on('data', (chunk) => {
  console.log('=====================================')
  console.log('Новий шматочок даних прочитано', chunk.toString());
})

readStream.on('error', (err) => {
  console.error('ПОМИЛКА читання даних:', err);
})

writeStream.on('finish', () => {
  console.log('Дані успішно записані до destination.txt');
});

writeStream.on('error', (err) => {
  console.error('ПОМИЛКА запису даних:', err);
})
// import fs from 'node:fs';
//
// fs.readFile('file.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Помилка читання файлу:', err);
//     return;
//   }
//
//   fs.writeFile('my-super-file.txt', data, (error) => {
//     if (error) {
//       console.error('Помилка запису файлу:', error);
//       return;
//     }
//
//     console.log('Запис пройшов успішно');
//
//     fs.appendFile('my-super-file.txt', '\n\nQWERTYYYY YYYYYYY YYYYYYY', (error) => {
//       if (error) {
//         console.error('Помилка додавання до файлу:', error);
//         return;
//       }
//
//       console.log('Додавання пройшло успішно');
//     })
//   })
// });



// import { readFile, writeFile, appendFile } from 'node:fs/promises';
//
// readFile('file.txt')
//   .then(function (data) {
//     console.log('Successfully read file', data.toString());
//     return writeFile('copy-of-file.txt', data);
//   })
//   .then(() => appendFile('copy-of-file.txt', '\n\n\n THIS TEXT ADDED!!!!!!!'))
//   .then(() => {
//     console.log('HUGE SUCCESS!!!')
//   })
//   .catch( (err) => {
//     console.error('ERROR: ', err);
//   })
//
//
// console.log('!!!!!!!!!!!!!!!!!!!')

import { readFile, writeFile, appendFile, unlink, stat, readdir } from 'node:fs/promises';

//
// async function copyAndAppend(fileToRead, fileToWrite) {
//   try {
//     const data = await readFile(fileToRead);
//     await writeFile(fileToWrite, data)
//     await appendFile(fileToWrite, '\n\n\n THIS TEXT ADDED 22 !!!!!!!')
//     console.log('HUGE SUCCESS!!!')
//   } catch (error) {
//     console.error('Ooooops: ', error);
//     throw error;
//   }
//
//   console.log('!!!!!!!!!!!!!!!!!!!')
// }
//
// copyAndAppend('file.txt', 'copy-of-file2.txt');

// Видалити файл
// await unlink('copy-of-file2.txt');

// const fileInfo = await stat('index.js');
// console.log('fileInfo: ', fileInfo.isDirectory()); // fileInfo.isFile()

// const dirContent = await readdir('../');
// console.log('dirContent', dirContent);

async function listFiles(dirPath) {
  const files = await readdir(dirPath)

  for (const file of files) {
    const filePath = `${dirPath}/${file}`
    const stats = await stat(filePath)

    if (stats.isDirectory()) {
      await listFiles(filePath)
    } else {
      console.log(filePath.replace('//', '/'), stats.size);
    }
  }
}

await listFiles('../')









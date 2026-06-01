import path  from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('import.meta', import.meta);
console.log('__filename', __filename);
console.log('__dirname', __dirname);



const filePath = '../data/file.txt';
const absolutePath = path.resolve(__dirname, filePath);
console.log('absolutePath', absolutePath);
console.log('file name', path.basename(absolutePath));
console.log('file extension', path.extname(absolutePath));


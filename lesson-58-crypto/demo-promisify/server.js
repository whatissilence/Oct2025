import http from 'node:http';
import fs from 'node:fs';
import path  from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFileAsync = promisify(fs.readFile);

const server = http.createServer((request, response) => {
  console.log('Request recieved. Url:', request.url)

  if(request.url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    response.write('Main page!!!!!!!3333');
    response.end();
    return;
  }

  if(request.url.startsWith('/imgs/')) {
    const imagePath = path.join(__dirname, request.url);
    const extension = path.extname(request.url)
    const extWithoutDot = extension.replace('.', '');
    const mimeType = extWithoutDot === 'svg' ? 'image/svg+xml' : `image/${extWithoutDot}`;

    readFileAsync(imagePath)
      .then((data) => {
        response.statusCode = 200;
        response.setHeader('Content-Type', mimeType);
        response.end(data);
      })
      .catch((err) => {
        response.statusCode = 404;
        response.end('Error reading image');
      })

    return;
  }

  response.statusCode = 404;
  response.write('404 Not Found! Where did you get this link?');
  response.end();
})

server.listen(PORT, () => {
  console.log(`Server started. Listening on port ${PORT}`);
})

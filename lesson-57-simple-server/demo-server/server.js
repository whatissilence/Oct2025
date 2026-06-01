import http from 'node:http';
import fs from 'node:fs';
import path  from 'node:path';
import { fileURLToPath } from 'node:url';
import { mainPageHtml, styleCssContent } from './content.js';
import usersData from './usersData.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const server = http.createServer((request, response) => {
  console.log('Request recieved. Url:', request.url)

  if(request.url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    response.write(mainPageHtml);
    response.end();
    return;
  }

  if(request.url === '/style.css') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/css');
    response.write(styleCssContent)
    response.end();
    return;
  }

  if(request.url === '/users') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json; charset=utf-8');

    response.write(JSON.stringify(usersData));
    response.end();
    return;
  }

  if(request.url.startsWith('/users/')) {
    const userId = parseInt(request.url.replace('/users/', ''));
    const user = usersData.find(user => user.id === userId);

    if(!user) {
      response.statusCode = 404;
      response.end('User not found');
      return;
    }

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json; charset=utf-8');

    response.write(JSON.stringify(user));
    response.end();
    return;
  }

  if(request.url.startsWith('/imgs/')) {
    const imagePath = path.join(__dirname, request.url);
    const extension = path.extname(request.url)
    const extWithoutDot = extension.replace('.', '');
    const mimeType = extWithoutDot === 'svg' ? 'image/svg+xml' : `image/${extWithoutDot}`;

    fs.readFile(imagePath, (err, data) => {
      if(err) {
        response.statusCode = 404;
        response.end('Error reading image');
        return;
      }

      response.statusCode = 200;
      response.setHeader('Content-Type', mimeType);
      response.end(data);
    })
    return;
  }

  if(request.url === '/text') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');

    response.write('This is simple text, I swear!');
    response.end();
    return;
  }

  response.statusCode = 404;
  response.write('404 Not Found! Where did you get this link?');
  response.end();
})

server.listen(PORT, () => {
  console.log(`Server started. Listening on port ${PORT}`);
})

process.on('SIGINT', () => {
  console.log('\nShutting down the server');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
})
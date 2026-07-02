import http  from 'node:http';
import express from 'express';
import { Server } from 'socket.io';

const PORT = 3000;
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const users = {};

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('register user', (nickname) => {
    if (users[nickname]) {
      socket.emit('registration error', 'This nickname is already taken');
      return;
    }

    socket.username = nickname;
    users[nickname] = socket.id;

    console.log(`User registered: ${nickname} (${socket.id})`);
    socket.emit('registration success', nickname);
    io.emit('update users list', Object.keys(users));
  });

  socket.on('message', (data) => {
    const { text, to } = data;
    const sender = socket.username || 'Anonymous';

    const messagePayload = {
      sender: sender,
      text: text,
      isPrivate: to !== 'all'
    };

    if (to === 'all') {
      io.emit('message', messagePayload);
    } else {
      const targetSocketId = users[to];
      if (targetSocketId) {
        io.to(targetSocketId).emit('message', messagePayload);
        socket.emit('message', messagePayload);
      } else {
        socket.emit('system message', `User ${to} not found.`);
      }
    }
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`, users);
    if (socket.username) {
      delete users[socket.username];
      io.emit('update users list', Object.keys(users));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

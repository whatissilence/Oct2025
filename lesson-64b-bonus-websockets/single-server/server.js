import http from "node:http";
import express from "express";
import { Server } from "socket.io";

const PORT = 3000;
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
});

app.get("/", (req, res) => {
  res.send("Server is alive");
})


function handleClientMessage(messageStr) {
  console.log("Received message", messageStr);

  setTimeout(() => {
    io.emit('message', `Server sent: ${messageStr}`);
  }, 5000)
}

io.on('connection', (socket) => {
  console.log('Client connected', socket.id);

  socket.on('message', handleClientMessage)

  socket.on('disconnect', () => {
    console.log('Client disconnected', socket.id);
  })
})



server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
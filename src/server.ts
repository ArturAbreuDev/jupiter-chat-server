import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { PrismaClient } from '@prisma/client';

const app = express();
const server = createServer(app);
const io = new Server(server);
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

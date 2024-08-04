import { Server } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import { createMessage } from '../controllers/messageController';

export const setupSocket = (io: Server, prisma: PrismaClient) => {
  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('joinRoom', async (room) => {
      socket.join(room);
      console.log(`User joined room: ${room}`);

      const messages = await prisma.message.findMany({
        where: { room },
        include: { user: true },
      });
      socket.emit('allMessages', messages);
    });

    socket.on('sendMessage', async (messageData) => {
      const { room, content, userId } = messageData;

      try {
        const message = await createMessage(content, userId, room);
        io.to(room).emit('receiveMessage', message);
      } catch (error) {
        console.error('Error sending message:', error);
        socket.emit('error', 'Error sending message');
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};

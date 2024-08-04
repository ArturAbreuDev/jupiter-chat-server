import { createServer } from 'http';
import { app, prisma } from './app';
import { Server } from 'socket.io';
import { corsOptions } from './config/corsConfig';
import { setupSocket } from './socket/socketService';
import { PORT } from './config/env';

const server = createServer(app); 
const io = new Server(server, { cors: corsOptions }); 

setupSocket(io, prisma); 

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

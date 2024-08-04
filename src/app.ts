import express from 'express';
import { PrismaClient } from '@prisma/client';
import { getMessages, deleteMessages } from './controllers/messageController';
import { corsOptions } from './config/corsConfig';
import cors from 'cors'

const app = express();
const prisma = new PrismaClient();

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/messages/:room', getMessages);
app.delete('/messages/:room', deleteMessages);

export { app, prisma };

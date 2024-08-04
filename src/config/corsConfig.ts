import { ORIGIN } from './env';

export const corsOptions = {
  origin: 'https://jupiter-chat-nine.vercel.app',
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type']
};

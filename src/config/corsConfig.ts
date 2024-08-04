import { ORIGIN } from './env';

export const corsOptions = {
  origin: ORIGIN,
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true,
};

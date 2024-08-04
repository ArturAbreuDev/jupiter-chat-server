import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3333;
export const ORIGIN = process.env.ORIGIN || 'http://localhost:5173';

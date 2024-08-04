import { Request, Response } from 'express';
import { createUserIfNotExists } from '../services/userService';

export const createUser = async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const user = await createUserIfNotExists(userId);
    res.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

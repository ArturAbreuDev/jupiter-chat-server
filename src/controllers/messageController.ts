import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { createUserIfNotExists } from '../services/userService';

const prisma = new PrismaClient();

export const createMessage = async (content: string, userId: string, room: string) => {
  await createUserIfNotExists(userId);

  return prisma.message.create({
    data: {
      content,
      userId,
      room
    },
  });
};

export const getMessages = async (req: Request, res: Response) => {
  const { room } = req.params;
  try {
    const messages = await prisma.message.findMany({
      where: { room },
      include: { user: true },
    });
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteMessages = async (req: Request, res: Response) => {
  const { room } = req.params;
  try {
    await prisma.message.deleteMany({
      where: { room },
    });
    res.json({ message: 'Messages deleted' });
  } catch (error) {
    console.error('Error deleting messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

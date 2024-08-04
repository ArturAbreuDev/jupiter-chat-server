import { prisma } from './prismaService';
import { v4 as uuidv4 } from 'uuid';

export const createUserIfNotExists = async (userId: string) => {
  let user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        id: userId,
        username: `User_${uuidv4()}`,
      },
    });
  }

  return user;
};

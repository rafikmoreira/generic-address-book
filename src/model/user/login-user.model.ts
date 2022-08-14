import { PrismaClient } from '@prisma/client';

export abstract class LoginUserModel {
  static async exec(email: string) {
    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
}

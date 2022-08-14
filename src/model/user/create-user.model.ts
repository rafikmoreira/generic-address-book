import { PrismaClient, User } from '@prisma/client';
import { ERROR_MESSAGE } from '../../util/error_message';

export abstract class CreateUserModel {
  static async exec(userData: User) {
    const prisma = new PrismaClient();

    const userAlreadyExists = await prisma.user.findFirst({
      where: { email: userData.email },
    });

    if (userAlreadyExists) {
      throw new Error(ERROR_MESSAGE.UNIQUE_EMAIL);
    }

    const user = await prisma.user.create({ data: userData });

    return user;
  }
}

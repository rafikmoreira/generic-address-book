import { PrismaClient, User } from '@prisma/client';

export abstract class ListContactService {
  static async exec(user: User) {
    const prisma = new PrismaClient();

    const contacts = await prisma.contact.findMany({
      where: { userId: user.id },
    });

    return contacts;
  }
}

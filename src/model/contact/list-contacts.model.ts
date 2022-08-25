import { PrismaClient, User } from '@prisma/client';

export class ListContactModel {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  async exec() {
    const prisma = new PrismaClient();

    const contacts = await prisma.contact.findMany({
      where: { userId: this.user.id },
    });

    return contacts;
  }
}

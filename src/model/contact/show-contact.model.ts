import { PrismaClient, User } from '@prisma/client';
import { ERROR_MESSAGE } from '../../util/error_message';

export abstract class ShowContactModel {
  static async exec(contactId: number, user: User) {
    const prisma = new PrismaClient();

    const contactAlreadyExists = await prisma.contact.findFirst({
      where: { id: contactId, userId: user.id },
    });

    if (!contactAlreadyExists) {
      throw new Error(ERROR_MESSAGE.CONTACT_NOT_FOUND);
    }

    return contactAlreadyExists;
  }
}

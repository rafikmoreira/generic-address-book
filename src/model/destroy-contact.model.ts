import { PrismaClient, User } from '@prisma/client';
import { ERROR_MESSAGE } from '../util/error_message';

export abstract class DestroyContactModel {
  static async exec(contactId: number, user: User) {
    const prisma = new PrismaClient();

    const contactAlreadyExists = await prisma.contact.findFirst({
      where: { id: contactId, userId: user.id },
    });

    if (!contactAlreadyExists) {
      throw new Error(ERROR_MESSAGE.CONTACT_NOT_FOUND);
    }

    await prisma.contact.delete({
      where: {
        id: contactAlreadyExists.id,
      },
    });

    return {
      message: 'contato deletado',
    };
  }
}

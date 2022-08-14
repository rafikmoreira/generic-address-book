import { Contact, PrismaClient, User } from '@prisma/client';
import { ERROR_MESSAGE } from '../../util/error_message';

export abstract class UpdateContactModel {
  static async exec(contactId: number, contactData: Contact, user: User) {
    const prisma = new PrismaClient();

    const contactAlreadyExists = await prisma.contact.findFirst({
      where: { id: contactId, userId: user.id },
    });

    if (!contactAlreadyExists) {
      throw new Error(ERROR_MESSAGE.CONTACT_NOT_FOUND);
    }

    const updatedContact = await prisma.contact.update({
      where: {
        id: contactAlreadyExists.id,
      },
      data: contactData,
    });

    return updatedContact;
  }
}

import { Contact, PrismaClient, User } from '@prisma/client';
import { ERROR_MESSAGE } from '../../util/error_message';

export abstract class CreateContactModel {
  static async exec(contactData: Contact, user: User) {
    const prisma = new PrismaClient();

    const contactAlreadyExists = await prisma.contact.findFirst({
      where: { cpf: contactData.cpf },
    });

    if (contactAlreadyExists) {
      throw new Error(ERROR_MESSAGE.UNIQUE_CPF);
    }

    const contact = await prisma.contact.create({
      data: {
        ...contactData,
        userId: user.id,
      },
    });

    return contact;
  }
}

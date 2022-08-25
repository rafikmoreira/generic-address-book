import { Contact, PrismaClient, User } from '@prisma/client';
import { ERROR_MESSAGE } from '../../util/error_message';

export class CreateContactModel {
  private contactData: Contact;
  private user: User;

  constructor(contactData: Contact, user: User) {
    this.contactData = contactData;
    this.user = user;
  }

  async exec() {
    const prisma = new PrismaClient();

    const contactAlreadyExists = await prisma.contact.findFirst({
      where: { cpf: this.contactData.cpf },
    });

    if (contactAlreadyExists) {
      throw new Error(ERROR_MESSAGE.UNIQUE_CPF);
    }

    return await prisma.contact.create({
      data: {
        ...this.contactData,
        userId: this.user.id,
      },
    });
  }
}

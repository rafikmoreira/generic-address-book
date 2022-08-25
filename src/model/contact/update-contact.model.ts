import { Contact, PrismaClient, User } from '@prisma/client';
import { ERROR_MESSAGE } from '../../util/error_message';

export class UpdateContactModel {
  private contactId: number;
  private contactData: Contact;
  private user: User;

  constructor(contactId: number, contactData: Contact, user: User) {
    this.contactData = contactData;
    this.user = user;
    this.contactId = contactId;
  }

  async exec() {
    const prisma = new PrismaClient();

    const contactAlreadyExists = await prisma.contact.findFirst({
      where: { id: this.contactId, userId: this.user.id },
    });

    if (!contactAlreadyExists) {
      throw new Error(ERROR_MESSAGE.CONTACT_NOT_FOUND);
    }

    return await prisma.contact.update({
      where: {
        id: contactAlreadyExists.id,
      },
      data: this.contactData,
    });
  }
}

import { PrismaClient, User } from '@prisma/client';
import { ERROR_MESSAGE } from '../../util/error_message';

export class DestroyContactModel {
  private contactId: number;
  private user: User;

  constructor(contactId: number, user: User) {
    this.contactId = contactId;
    this.user = user;
  }

  async exec() {
    const prisma = new PrismaClient();

    const contactAlreadyExists = await prisma.contact.findFirst({
      where: { id: this.contactId, userId: this.user.id },
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

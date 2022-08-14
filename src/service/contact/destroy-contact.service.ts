import { User } from '@prisma/client';
import { DestroyContactModel } from '../../model/destroy-contact.model';

export abstract class DestroyContactService {
  static async exec(contactId: number, user: User) {
    const contact = await DestroyContactModel.exec(contactId, user);

    return contact;
  }
}

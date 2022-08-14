import { User } from '@prisma/client';
import { ShowContactModel } from '../../model/show-contact.model';

export abstract class ShowContactService {
  static async exec(contactId: number, user: User) {
    const contact = await ShowContactModel.exec(contactId, user);

    return contact;
  }
}

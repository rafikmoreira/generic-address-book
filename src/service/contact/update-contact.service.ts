import { Contact, User } from '@prisma/client';
import { UpdateContactModel } from '../../model/contact/update-contact.model';

export abstract class UpdatedContactService {
  static async exec(contactId: number, contactData: Contact, user: User) {
    const contact = await UpdateContactModel.exec(contactId, contactData, user);
    return contact;
  }
}

import { Contact, User } from '@prisma/client';
import { CreateContactModel } from '../../model/contact/create-contact.model';

export abstract class CreateContactService {
  static async exec(contactData: Contact, user: User) {
    const contact = await CreateContactModel.exec(contactData, user);
    return contact;
  }
}

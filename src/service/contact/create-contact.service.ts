import { Contact, User } from '@prisma/client';
import { CreateContactModel } from '../../model/contact/create-contact.model';

export class CreateContactService {
  private contactData: Contact;
  private user: User;

  constructor(contactData: Contact, user: User) {
    this.contactData = contactData;
    this.user = user;
  }

  async exec() {
    return await new CreateContactModel(this.contactData, this.user).exec();
  }
}

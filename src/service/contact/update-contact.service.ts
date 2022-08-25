import { Contact, User } from '@prisma/client';
import { UpdateContactModel } from '../../model/contact/update-contact.model';

export class UpdatedContactService {
  private contactId: number;
  private contactData: Contact;
  private user: User;

  constructor(contactId: number, contactData: Contact, user: User) {
    this.contactData = contactData;
    this.user = user;
    this.contactId = contactId;
  }

  async exec() {
    return await new UpdateContactModel(
      this.contactId,
      this.contactData,
      this.user
    ).exec();
  }
}

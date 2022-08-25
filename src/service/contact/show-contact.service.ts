import { User } from '@prisma/client';
import { ShowContactModel } from '../../model/contact/show-contact.model';

export class ShowContactService {
  private contactId: number;
  private user: User;

  constructor(contactId: number, user: User) {
    this.contactId = contactId;
    this.user = user;
  }

  async exec() {
    return await new ShowContactModel(this.contactId, this.user).exec();
  }
}

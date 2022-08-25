import { User } from '@prisma/client';
import { DestroyContactModel } from '../../model/contact/destroy-contact.model';

export class DestroyContactService {
  private contactId: number;
  private user: User;

  constructor(contactId: number, user: User) {
    this.contactId = contactId;
    this.user = user;
  }

  async exec() {
    return await new DestroyContactModel(this.contactId, this.user).exec();
  }
}

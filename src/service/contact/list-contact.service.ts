import { User } from '@prisma/client';
import { ListContactModel } from '../../model/contact/list-contacts.model';

export class ListContactService {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  async exec() {
    return await new ListContactModel(this.user).exec();
  }
}

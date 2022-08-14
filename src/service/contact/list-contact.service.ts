import { User } from '@prisma/client';
import { ListContactModel } from '../../model/list-contacts.model';

export abstract class ListContactService {
  static async exec(user: User) {
    const contacts = await ListContactModel.exec(user);

    return contacts;
  }
}

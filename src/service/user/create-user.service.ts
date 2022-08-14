import { User } from '@prisma/client';
import { CreateUserModel } from '../../model/user/create-user.model';
import bcrypt from 'bcrypt';

export abstract class CreateUserService {
  static async exec(userData: User) {
    const password = userData.senha.trim();

    const hash = await bcrypt.hash(password, 10);
    const protectedUser = { ...userData, senha: hash } as User;

    const response = await CreateUserModel.exec(protectedUser);
    return response;
  }
}

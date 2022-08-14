import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { LoginUserModel } from '../../model/user/login-user.model';
import { ERROR_MESSAGE } from '../../util/error_message';

import 'dotenv/config';

export abstract class LoginUserService {
  static async exec(loginParams: { email: string; senha: string }) {
    const { email, senha } = loginParams;

    const user = (await LoginUserModel.exec(email)) as User;

    if (!user) {
      throw new Error(ERROR_MESSAGE.USER_NOT_FOUND);
    }

    const result = await bcrypt.compare(senha, user.senha);

    if (!result) {
      throw new Error(ERROR_MESSAGE.INVALID_PASSWORD);
    }

    const secret = process.env.SECRET_KEY as string;

    const token = sign(user, secret, {
      subject: `${user.id}`,
      expiresIn: '1d',
    });

    return token;
  }
}

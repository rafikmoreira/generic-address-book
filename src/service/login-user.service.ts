import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import { LoginUserModel } from '../model/login-user.model'

export abstract class LoginUserService {
  static async exec(loginParams: { email: string; senha: string }) {
    const { email, senha } = loginParams

    try {
      const user = (await LoginUserModel.exec(email)) as User
      const result = await bcrypt.compare(senha, user.senha)
      if (result) {
        return user
      } else {
        throw new Error()
      }
    } catch (e) {
      return { error: 'algo deu errado...' }
    }
  }
}

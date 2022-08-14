import { PrismaClient, User } from '@prisma/client'

export abstract class CreateUserModel {
  static async exec(userData: User) {
    const prisma = new PrismaClient()

    try {
      const user = await prisma.user.create({ data: userData })
      await prisma.$disconnect()

      return user
    } catch (e) {
      await prisma.$disconnect()

      return { error: 'algo deu errado...' }
    }
  }
}

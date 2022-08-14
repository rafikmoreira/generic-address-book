import { PrismaClient } from '@prisma/client'

export abstract class LoginUserModel {
  static async exec(email: string) {
    const prisma = new PrismaClient()

    try {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          email,
        },
      })
      await prisma.$disconnect()

      return user
    } catch (e) {
      await prisma.$disconnect()

      return { error: 'algo deu errado...' }
    }
  }
}

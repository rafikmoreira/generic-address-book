import { Contact, PrismaClient } from '@prisma/client'

export const createContactService = async (
  contact: Contact,
  userId: number
) => {
  const prisma = new PrismaClient()
  try {
    await prisma.$disconnect()
  } catch (e) {
    await prisma.$disconnect()
    return e
  }
}

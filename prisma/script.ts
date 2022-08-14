import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  /* Você escreverá suas consultas para testes do Prisma Client aqui
   *
   * comando: npx ts-node script.ts
   *
   * exemplo:
   *
   * const user = await prisma.user.create({
   *   data: {
   *     email: 'rafikmoreiradias@gmail.com',
   *     senha: 'teste123',
   *   },
   * })
   * console.log(user)
   */
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

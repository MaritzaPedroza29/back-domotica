/*import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
  await prisma.usuarios.create({
    data: {
      nombre: 'rodolfo ortega',
      correo: 'rodolfoortega@gmail.com',
      clave: '5678',
      imagen: 'profesor4.png'
    }
  })

  const allUsers = await prisma.usuarios.findMany()
  console.log(allUsers)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })*/
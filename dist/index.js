"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.usuarios.create({
        data: {
            nombre: 'rodolfo ortega',
            correo: 'rodolfoortega@gmail.com',
            clave: '5678'
        }
    });
    const allUsers = await prisma.usuarios.findMany();
    console.log(allUsers);
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=index.js.map
import {PrismaClient} from '@prisma/client';
import {TiposUsuarios} from '../src/resources/tipoUsuario/tipoUsuario.constansts'
const prisma = new PrismaClient();

async function seed() {
    await prisma.tipoUsuario.createMany({
        data: [
            {id:TiposUsuarios.ADMIN, rotulo:"admin"},
            {id:TiposUsuarios.CLIENT, rotulo:"client"},
        ],
        skipDuplicates:true, //caso tu rode dnv e tenha coisa duplicada sendo adicionada na DB
    })
}

seed().then(async () => {
    prisma.$disconnect();
}).catch(async (e) => {
    console.log(e)
    prisma.$disconnect();
})
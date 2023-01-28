import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main () {
  const plants = await prisma.plant.findMany();
  console.log(plants);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Пустой seed файл
}

main()
  .catch((e) => {
    console.error('❌ Ошибка при заполнении базы данных:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

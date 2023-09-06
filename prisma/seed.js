const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function seeded() {
  try {
    await db.category.createMany({
      data: [
        { name: 'Celebrities' },
        { name: 'Game Characters' },
        { name: 'Movie Characters' },
        { name: 'Scientists' },
        { name: 'Rappers' },
      ],
    });
  } catch (error) {
    console.error(error);
  } finally {
    await db.$disconnect();
  }
}

seeded();

const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();
const data = require("../assets/products.json");

async function seedDatabase() {
  for (const productData of data.data) {
    await db.product.create({
      data: productData,
    });
  }
}

seedDatabase()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await db.$disconnect();
  });

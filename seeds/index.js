// seeds/index.js

const seedCategories = require("./category-seeds");
const seedProducts = require("./product-seeds");
const seedTags = require("./tag-seeds");

const sequelize = require("../config/connection");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedCategories();
  await seedProducts();
  await seedTags();

  process.exit(0);
};

seedDatabase();

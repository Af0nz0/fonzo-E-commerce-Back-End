// category-seeds.js

const path = require("path");
const { Category } = require(path.join(__dirname, "../models")); // Verify the correct path to '../models'

// Define your category seed data below...
const categoryData = [
  {
    category_name: "Electronics",
  },
  {
    category_name: "Clothing",
  },
  // Add more category data as needed...
];

const seedCategories = async () => {
  await Category.bulkCreate(categoryData);
};

module.exports = seedCategories;

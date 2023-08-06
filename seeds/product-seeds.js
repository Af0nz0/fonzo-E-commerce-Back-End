// product-seeds.js

const path = require("path");
const { Product, Category, Tag, ProductTag } = require(path.join(
  __dirname,
  "../models"
));

// Define your product seed data below...
const productData = [
  {
    product_name: "Laptop",
    price: 999.99,
    stock: 10,
    category_id: 1, // Assuming category_id 1 is for Electronics
    // Add tags using the 'include' option in bulkCreate
    tags: [{ tag_name: "Electronic" }, { tag_name: "Tech" }],
  },
  {
    product_name: "T-Shirt",
    price: 19.99,
    stock: 50,
    category_id: 2, // Assuming category_id 2 is for Clothing
    // Add tags using the 'include' option in bulkCreate
    tags: [{ tag_name: "Fashion" }],
  },
  // Add more product data as needed...
];

const seedProducts = async () => {
  await Product.bulkCreate(productData, {
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
      {
        model: Tag,
        through: ProductTag,
        as: "tags",
        attributes: ["id", "tag_name"],
      },
    ],
  });
};

module.exports = seedProducts;

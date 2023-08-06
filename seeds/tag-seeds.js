// tag-seeds.js

const path = require("path");
const { Tag, Product, ProductTag } = require(path.join(__dirname, "../models"));

// Define your tag seed data below...
const tagData = [
  {
    tag_name: "Electronic",
  },
  {
    tag_name: "Fashion",
  },
  // Add more tag data as needed...
];

const seedTags = async () => {
  await Tag.bulkCreate(tagData);
};

module.exports = seedTags;

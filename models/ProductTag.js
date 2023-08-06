// ProductTag.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const ProductTag = sequelize.define("ProductTag", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Product",
      key: "id",
    },
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Tag",
      key: "id",
    },
  },
});
// ProductTag.js

// ...

// ProductTag belongs to Product
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
});

// ProductTag belongs to Tag
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

// ...

module.exports = ProductTag;

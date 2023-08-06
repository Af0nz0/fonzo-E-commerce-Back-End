// Product.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
    validate: {
      isNumeric: true,
    },
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Category",
      key: "id",
    },
  },
});
// Product.js

// ...

// Product belongs to Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Product belongs to many Tag models through ProductTag
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// ...

module.exports = Product;

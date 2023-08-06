// Tag.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Tag = sequelize.define("Tag", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tag_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// Tag.js

// ...

// Tag belongs to many Product models through ProductTag
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// ...

module.exports = Tag;

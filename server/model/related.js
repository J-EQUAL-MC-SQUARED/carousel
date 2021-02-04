const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Related = sequelize.define('related', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stars: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

module.exports = Related;

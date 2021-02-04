const { DataTypes } = require('sequelize');
const sequelize = require('../../database');
const Related = require('./related');

const Primary = sequelize.define('primary', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

Primary.hasMany(Related);

module.exports = Primary;

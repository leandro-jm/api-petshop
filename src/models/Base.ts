const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Base = db.define('Base', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
},
{
  tableName: "base",
  timestamps: false
}
);

module.exports = Base;

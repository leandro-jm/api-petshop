import { DataTypes } from "sequelize";
const dbAnimal = require('../config/database');

const Animal = dbAnimal.define('Animal', {
  animal_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  proprietario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
  tableName: "animal",
  timestamps: false
}
);

module.exports = Animal;

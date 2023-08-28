import { DataTypes } from "sequelize";
const dbProprietario = require('../config/database');

const Proprietario = dbProprietario.define('Proprietario', {
  proprietario_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  tableName: "proprietario",
  timestamps: false
}
);

module.exports = Proprietario;
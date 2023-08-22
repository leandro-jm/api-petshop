const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Proprietario = db.define('Proprietario', {
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

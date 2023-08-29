import { DataTypes } from "sequelize";

const dbServico = require('../config/DatabaseSequelize');

const Servico = dbServico.define('Servico', {
  servico_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  animal_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
  tableName: "servico",
  timestamps: false
}
);

module.exports = Servico;
const { Sequelize } = require('sequelize');
import dotenv from 'dotenv';

dotenv.config();

module.exports = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_URL,
  dialect: 'postgres',
});

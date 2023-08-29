const { mongoose } = require('mongoose');
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DB_MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão:'));

db.once('open', () => {
  console.log('Conexão com o MongoDB Atlas estabelecida com sucesso');
});

require('dotenv').config({path:'variaveis.env'});
const exprees = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = exprees();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
})

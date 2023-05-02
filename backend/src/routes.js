const express = require('express');
const routes = express.Router();


const CadastroController = require('./controllers/CadastroController.js');


routes.get('/cadastro', CadastroController.buscarTodos);
routes.get('/cadastro/:codigo', CadastroController.buscarUm);
routes.post('/cadastro', CadastroController.inserir);




module.exports = routes;
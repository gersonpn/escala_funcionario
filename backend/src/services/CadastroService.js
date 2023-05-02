const db = require('../db');


module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query('SELECT * FROM cadastro', (error, results) => {
        if (error) { rejeitado(error); return; }
        aceito(results);
      });
    });
  },

  buscarUm: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query('SELECT * FROM cadastro WHERE codigo = ?', [codigo], (error, results) => {
        if (error) { rejeitado(error); return; }
        if (results.length > 0) {
          aceito(results[0]);
        } else {
          aceito(false);
        }
      });
    });
  },

  inserir: (nome, email, senha) => { 
    return new Promise((aceito, rejeitado) => {

      db.query('INSERT INTO cadastro (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (error, results) => {
        if (error) { rejeitado(error); return; }
        aceito(results.insertId);
      });
    });
  }

};
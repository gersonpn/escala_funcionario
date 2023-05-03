const CadastroService = require('../services/CadastroService');


module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: '', result: [] };
    let cadastro = await CadastroService.buscarTodos();

    for (let i in cadastro) {
      json.result.push({
        id: cadastro[i].codigo,
        nome: cadastro[i].nome,
        email: cadastro[i].email,
        senha: cadastro[i].senha
      });
    }

    res.json(json);
  },

  buscarUm: async (req, res) => {
    let json = { error: '', result: {} };
    let codigo = req.params.codigo;
    let cadastro = await CadastroService.buscarUm(codigo);

    if (cadastro) {
      json.result = cadastro;
    }

    res.json(json);
  },

  inserir: async (req, res) => {
    let json = { error: '', result: {}};

    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;
    if (nome && email && senha) {
      let codigo = await CadastroService.inserir(nome, email, senha);
      json.result = {
        codigo,
        nome,
        email,
        senha
      };
    } else {
      json.error = 'Campos não enviados';
    }

    res.json(json);
  }

}
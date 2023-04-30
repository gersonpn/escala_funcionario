const api_key = 'fae1b2c09b17cd198e14188e780a594c9dff5013';
const country_code = 'BR';
const year = '2023';

const url = `https://calendarific.com/api/v2/holidays?api_key=${api_key}&country=${country_code}&year=${year}`;

fetch(url)
  .then(response => response.json())
  .then(data => {

  })
  .catch(error => {
    console.error('Erro na solicitação:', error);
  });


  function cadastrar() {
    var nome = document.getElementById('inputNome').value;
    var sobrenome = document.getElementById('inputSobrenome').value;
    var email = document.getElementById('cdEmail').value;
    var senha = document.getElementById('cdPassword').value;
    var confirmarSenha = document.getElementById('confirmPassword').value;

   
    if (senha != confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }


    var usuario = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha
    };

     axios.post('/api/usuarios', usuario) .then(function (response) {
      alert('Usuário cadastrado com sucesso!');
        window.location.href = '/login.html';
     })
       .catch(function (error) {
         alert('Ocorreu um erro ao cadastrar o usuário!');
         console.log(error);
       });


    alert('Usuário cadastrado com sucesso!');
    window.location.href = '/login.html';
  }

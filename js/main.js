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
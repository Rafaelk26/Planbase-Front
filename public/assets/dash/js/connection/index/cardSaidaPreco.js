const exitElement = document.getElementById('ExitInsertofBack');

function obterPrecosSaida() {
  axios.get('http://localhost:3001/api/preco/saida/get/')
    .then((response) => {
      const dadosPrecosSaida = response.data;
      const precoSaida = dadosPrecosSaida[0]["TotalSaida"];

      exitElement.textContent = precoSaida;
    })
    .catch((error) => {
      console.error('Erro ao obter os preços de saida:', error);
    });
}

obterPrecosSaida();

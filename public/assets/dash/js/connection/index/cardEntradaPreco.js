const entranceElement = document.getElementById('EntranceInsertofBack');

function obterPrecosEntrada() {
  axios.get('http://localhost:3001/api/preco/entrada/get/')
    .then((response) => {
      const dadosPrecosEntrada = response.data;
      const precoEntrada = dadosPrecosEntrada[0]['SUM(valor)'];

      entranceElement.textContent = precoEntrada;
    })
    .catch((error) => {
      alert('Erro ao obter os preços de entrada:', error);
    });
}

obterPrecosEntrada();

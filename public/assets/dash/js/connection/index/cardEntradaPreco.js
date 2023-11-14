const entranceElement = document.getElementById('EntranceInsertofBack');

function obterPrecosEntrada() {
  axios.get('http://localhost:3001/api/preco/entrada/get/')
    .then((response) => {
      const dadosPrecosEntrada = response.data;
      const precoEntrada = dadosPrecosEntrada[0]["TotalEntrada"];
      
      entranceElement.textContent = precoEntrada;
    })
    .catch((error) => {
      console.error('Erro ao obter os preços de entrada:', error);
    });
}

obterPrecosEntrada();

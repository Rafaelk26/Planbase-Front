const caixaElement = document.getElementById('BoxInsertofBack');

function obterPrecosCaixa() {
  axios.get('http://localhost:3001/api/preco/caixa/get/')
    .then((response) => {
      const dadosPrecosCaixa = response.data;
      const precoCaixa = dadosPrecosCaixa[0].Caixa;
      
      caixaElement.textContent = precoCaixa;
    })
    .catch((error) => {
      console.error('Erro ao obter os preços do caixa', error);
    });
}

obterPrecosCaixa();

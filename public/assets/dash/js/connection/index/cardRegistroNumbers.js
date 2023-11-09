const numbersElement = document.getElementById('NumbersRegisterInsertofBack');

function obterNumerosdeRegistros() {
  axios.get('http://localhost:3001/api/registros/numeros/get/')
    .then((response) => {
      const dadosNumeros = response.data;
      const numerosRegistrados = dadosNumeros[0]['registros'];

      numbersElement.textContent = numerosRegistrados;
    })
    .catch((error) => {
      alert('Erro ao obter os números dos registros:', error);
    });
}

obterNumerosdeRegistros();

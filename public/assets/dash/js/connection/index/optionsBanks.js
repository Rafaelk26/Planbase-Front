// Modal Entrada


document.addEventListener("DOMContentLoaded", async function () {
    const selectElement = document.getElementById('destinatarioEntrada');
    
    try {
      const response = await axios.get('http://localhost:3001/api/cartoes/get');
      const data = response.data;

      data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.text = item.instituicaoBancaria;
        selectElement.appendChild(option);
      });
    } catch (error) {
      console.error('Houve um erro ao recuperar os dados:', error);
    }
  });

  // Modal Saída 

  document.addEventListener("DOMContentLoaded", async function () {
    const selectElement = document.getElementById('destinatarioSaida');
    
    try {
      const response = await axios.get('http://localhost:3001/api/cartoes/get');
      const data = response.data;

      data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.text = item.instituicaoBancaria;
        selectElement.appendChild(option);
      });
    } catch (error) {
      console.error('Houve um erro ao recuperar os dados:', error);
    }
  });
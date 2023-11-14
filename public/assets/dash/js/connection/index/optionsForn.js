// Modal Entrada


document.addEventListener("DOMContentLoaded", async function () {
    const selectElement = document.getElementById('fornecedorEntrada');
    
    try {
      const response = await axios.get('http://localhost:3001/api/forn/get/');
      const data = response.data;

      data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.text = item.nome;
        selectElement.appendChild(option);
      });
    } catch (error) {
      console.error('Houve um erro ao recuperar os dados:', error);
    }
  });

  // Modal Saída 

  document.addEventListener("DOMContentLoaded", async function () {
    const selectElement = document.getElementById('fornecedorSaida');
    
    try {
      const response = await axios.get('http://localhost:3001/api/forn/get/');
      const data = response.data;

      data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.text = item.nome;
        selectElement.appendChild(option);
      });
    } catch (error) {
      console.error('Houve um erro ao recuperar os dados:', error);
    }
  });
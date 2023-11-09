document.addEventListener("DOMContentLoaded", function () {
    axios.get('http://localhost:3001/api/registros/get/entrada')
      .then(response => {
        // Os dados recebidos
        const registros = response.data;
        console.log(registros);
      })
      .catch(error => {
        console.error(error);
      });
  });
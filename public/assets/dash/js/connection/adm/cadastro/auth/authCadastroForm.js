document.addEventListener("DOMContentLoaded", (event) => {

    axios.get('http://locahost:3001/api/adm/cadastro/user/')
      .then(response => {
        if (response.data === 'Acesso não autorizado') {
            alert('Acesso não autorizado, você não possui permissão.');
            window.location.href = '/login'
        } else {
        }
      })
      .catch(error => {
        console.error(error);
      });
  });
  
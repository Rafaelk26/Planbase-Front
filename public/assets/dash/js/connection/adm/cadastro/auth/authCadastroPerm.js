// Arquivo JavaScript da página de login (login.js, por exemplo)
document.addEventListener("DOMContentLoaded", (event) => {
    // Este código será executado quando a página for carregada

    axios.get('http://locahost:3001/api/adm/cadastro/')
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
  
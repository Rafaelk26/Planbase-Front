document.addEventListener("DOMContentLoaded", (event) => {
    // Haverá algum método para resgatar o id do usuário, através da sessão, sei lá.
    axios.get('http://localhost:3001/api/perfil/')
        .then(function (response) {
            const { foto } = response.data[0];

            foto === null ? document.querySelector("#photoUserInsertHere").src = '/fotoFictícia' :  document.querySelector("#photoUserInsertHere").src = foto;
        })
        .catch(function (error) {
            console.error(error);
        });
});
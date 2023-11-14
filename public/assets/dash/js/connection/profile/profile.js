document.addEventListener("DOMContentLoaded", (event) => {

    axios.get('http://localhost:3001/api/perfil/')
        .then(function (response) {
            const { nome, nomeCompleto, email, bio, cargo, telefone } = response.data[0];

            document.querySelector("#nome").textContent = nome;
            document.querySelector("#nomeCompleto").textContent = nomeCompleto;
            document.querySelector("#email").textContent = email;
            document.querySelector("#bio").textContent = bio;
            document.querySelector("#cargo").textContent = cargo;
            document.querySelector("#telefone").textContent = telefone;
        })
        .catch(function (error) {
            console.error(error);
        });
});
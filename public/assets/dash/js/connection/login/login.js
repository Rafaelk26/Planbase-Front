document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('formLogin').addEventListener('submit', async (e) => {
        e.preventDefault();
      
        const id = document.getElementById('matriculaLogin').value;
        const senha = document.getElementById('senhaLogin').value;
      
        try {
          const response = await axios.post('http://localhost:3001/api/login', {
            id,
            senha
          });
          // Verifique a resposta do servidor
          if (response.data === 'Login bem-sucedido!') {
            // Redirecione o usuário ou faça o que for necessário após o login bem-sucedido
            alert('Login bem-sucedido!');
            window.location.href = '/';

          } else {
            alert('Credenciais inválidas.');
            window.location.href = '/login';
          }
        } catch (error) {
          console.error(error);
        }
      });
});


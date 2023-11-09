document.addEventListener("DOMContentLoaded", async () => {
    try {
      // Fazer uma solicitação para verificar a sessão de login no servidor
      const response = await axios.get('http://locahost:3001/api/perfil'); // Esta rota deve ser definida no seu servidor Express
  
      if (response.data === 'Acesso não autorizado') {
        // Redirecionar o usuário para a página de login ou mostrar uma mensagem de erro
        console.log('Acesso não autorizado. Redirecionando para a página de login.');
        window.location.href = '/login'; // Redireciona para a página de login
      } else {
      }
    } catch (error) {
      // Lidar com erros de conexão
      console.error('Erro na verificação da sessão:', error);
    }
});
  
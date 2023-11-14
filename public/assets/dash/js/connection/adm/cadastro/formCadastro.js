
document.addEventListener("DOMContentLoaded", (event) => {

    const form = document.querySelector("#formCadastrarUserNew");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const cpf = form.CPF.value;
      const email = form.Email.value;
      const telefone = form.Telefone.value;
      const uf = form.UF.value;
      const nome = form.Nome.value;
      const nascimento = form.Nascimento.value;
      const cidade = form.Cidade.value;
      const país = form.País.value;
      const dataÍnicio = form.DataÍnicio.value;
      const senha = form.Senha.value;
      const cargo = form.Cargo.value;
      const confirmarSenha = form.ConfirmarSenha.value;
      let administrador = 0;  
      
      cargo === 'Gestor' || cargo === 'Administrador' ? administrador = 1 : administrador = 0;

      const formData = { cpf, email, telefone, uf, nome, nascimento, cidade , país , dataÍnicio, senha, cargo, confirmarSenha, administrador }
  
      try {
        const response = await axios.post('http://localhost:3001/api/adm/cadastro/user/', formData);
      } catch (error) {
        console.error(error);
      }
  
    });
  
  });
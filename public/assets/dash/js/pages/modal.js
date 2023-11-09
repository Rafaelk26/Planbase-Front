function formatarDataInput(inputId) {
    const dataInput = document.getElementById(inputId);

    dataInput.addEventListener("input", () => {
        let inputValue = dataInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

        if (inputValue.length > 8) {
            inputValue = inputValue.slice(0, 8); // Limita o tamanho da entrada a 8 caracteres
        }

        if (inputValue.length >= 2) {
            // Insere a primeira barra após os primeiros dois caracteres
            inputValue = inputValue.slice(0, 2) + "/" + inputValue.slice(2);
        }

        if (inputValue.length >= 5) {
            // Insere a segunda barra após os primeiros cinco caracteres
            inputValue = inputValue.slice(0, 5) + "/" + inputValue.slice(5);
        }

        dataInput.value = inputValue;
    });
  }
  // Chame a função para os campos de data em ambos os modais
  formatarDataInput("dataInput");
  formatarDataInput("dataInput2");


  function posicionaFixo(registro){
      // Recupera os dados do input valor
      const valueInputRegistros = document.querySelectorAll(registro);
      const labelFixo = document.querySelectorAll('.user-label-receita');
      // Adiciona evento de escuta para ver os valores preenchidos
      valueInputRegistros.addEventListener('change', ()=> {
      // Checa se obtem valor no input o label permanece fixo acima da caixa do input
      if(valueInputRegistros.value > 0){
        labelFixo.style.position = 'absolute';
    }
    });
  }

  posicionaFixo('inpt-despesa-el');
  posicionaFixo('inpt-despesa-el-number');

  posicionaFixo('inpt-receita-el');
  posicionaFixo('inpt-receita-el-number');



  // Função para limpar os formulários
  function limparFormulario() {
    // Obtém todos os campos do formulário
    const campos = document.querySelectorAll('input[type="text"], select, textarea');

    // Itera sobre os campos e os limpa
    campos.forEach((campo) => {
      if (campo.type === 'text' || campo.tagName === 'TEXTAREA') {
        campo.value = ''; // Limpa o valor do campo de texto ou textarea
      } else if (campo.tagName === 'SELECT') {
        campo.selectedIndex = 0; // Define o índice selecionado de volta para o primeiro item (opção padrão)
      }
    });
  }
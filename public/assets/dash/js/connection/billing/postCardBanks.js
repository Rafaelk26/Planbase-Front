document.addEventListener("DOMContentLoaded", async (event) => {
  const admMatricula = 'mb';
  const admSenha = 'sb';
  let cartaoID = 0;

  const form = document.querySelector("#novoCartaoForm");

  form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const agencia = form.Agencia.value;
      const conta = form.NumeroConta.value;
      const taxa = form.Taxa.value;
      const tipoCobranca = form.TipoCobranca.value;
      const instituicaoBancaria = form.InstituicaoBancaria.value;
      let codigoBancario = '000';  

    //   const codBanco = []
    //   codBanco['Banco do Brasil S.A.'] = '001'
    //   codBanco['Inter'] = '002'

      if(instituicaoBancaria == 'Banco da Amazônia S.A.'){
        codigoBancario = '003';
      } else if(instituicaoBancaria == 'Banco do Brasil S.A.'){
        codigoBancario = '001';
      } else if(instituicaoBancaria == 'Banco de Brasília S.A.'){
        codigoBancario = '070';
      } else if(instituicaoBancaria == 'Banco do Nordeste do Brasil S.A.'){
        codigoBancario = '004';
      } else if(instituicaoBancaria == 'Banestes S.A.'){
        codigoBancario = '021';
      } else if(instituicaoBancaria == 'Banrisul S.A'){
        codigoBancario = '041';
      } else if(instituicaoBancaria == 'Banco Bradesco S.A.'){
        codigoBancario = '237';
      } else if(instituicaoBancaria == 'Caixa Econômica Federal'){
        codigoBancario = '104';
      } else if(instituicaoBancaria == 'Citi S.A'){
        codigoBancario = '745';
      } else if(instituicaoBancaria == 'Hsbc SA'){
        codigoBancario = '269';
      } else if(instituicaoBancaria == 'Inter S.A'){
        codigoBancario = '077';
      } else if(instituicaoBancaria == 'Itau S.A'){
        codigoBancario = '341';
      } else if(instituicaoBancaria == 'Nu Financeira S.A.'){
        codigoBancario = '260';
      } else if(instituicaoBancaria == 'Banco Original S.A.'){
        codigoBancario = '212';
      } else if(instituicaoBancaria == 'Banco Safra S.A.'){
        codigoBancario = '422';
      } else if(instituicaoBancaria == 'Banco Santander S.A'){
        codigoBancario = '033';
      } else if(instituicaoBancaria == 'Banco Sicoob S.A.'){
        codigoBancario = '756';
      } else if(instituicaoBancaria == 'Banco Sicredi S.A.'){
        codigoBancario = '748';
      } else{
        codigoBancario = '000';
      }
      const cartao = {
        id: cartaoID,
        agencia: agencia,
        conta: conta,
        taxa: taxa,
        tipoCobranca: tipoCobranca,
        InstituicaoBancaria: instituicaoBancaria,
        // codigoBancario: codBanco[instituicaoBancaria]
        codigoBancario: codigoBancario
      };

      createCard(cartao, cartaoID);

      cartaoID++;

      limparFormulario();
      try {
          // Adicione uma chamada para salvar os dados no banco de dados
          const response = await axios.post('http://localhost:3001/api/cartoes/', cartao);
          console.log(response.data); // Exiba a resposta do servidor no console
      } catch (error) {
          console.error(error);
      }

      const modalElement = document.getElementById('exampleModal3');
      const modal = new bootstrap.Modal(modalElement);
      modal.hide();
  });

  function createCard(card, id) {
      const newCard = document.createElement('div');
      newCard.className = 'col-md-6 mb-md-0 mb-4';
      newCard.id = `${id}`;

      let icone = '/assets/dash/img/icons-banks/outros-black.svg';

      if(card.codigoBancario == '003'){
        icone = '/assets/dash/img/icons-banks/Banco da Amazônia S.A.-black.svg'
      } else if(card.codigoBancario == '001'){
        icone = '/assets/dash/img/icons-banks/Banco do Brasil S.A.-black.svg'
      } else if(card.codigoBancario == '070'){
        icone = '/assets/dash/img/icons-banks/Banco do Brasil S.A.-black.svg'
      } else if(card.codigoBancario == '004'){
        icone = '/assets/dash/img/icons-banks/Banco do Nordeste do Brasil S.A.-black.svg'
      } else if(card.codigoBancario == '021'){
        icone = '/assets/dash/img/icons-banks/Banestes S.A.-black.svg'
      } else if(card.codigoBancario == '041'){
        icone = '/assets/dash/img/icons-banks/Banrisul S.A-black.svg'
      } else if(card.codigoBancario == '237'){
        icone = '/assets/dash/img/icons-banks/Banco Bradesco S.A.-black.svg'
      } else if(card.codigoBancario == '104'){
        icone = '/assets/dash/img/icons-banks/Caixa Econômica Federal-black.svg'
      } else if(card.codigoBancario == '745'){
        icone = '/assets/dash/img/icons-banks/Citi S.A-black.svg'
      } else if(card.codigoBancario == '269'){
        icone = '/assets/dash/img/icons-banks/Hsbc SA-black.svg'
      } else if(card.codigoBancario == '077'){
        icone = '/assets/dash/img/icons-banks/Inter S.A-black.svg'
      } else if(card.codigoBancario == '341'){
        icone = '/assets/dash/img/icons-banks/Itau S.A-black.svg'
      } else if(card.codigoBancario == '260'){
        icone = '/assets/dash/img/icons-banks/Nu Financeira S.A.-black.svg'
      } else if(card.codigoBancario == '212'){
        icone = '/assets/dash/img/icons-banks/Banco Original S.A.-black.svg'
      } else if(card.codigoBancario == '422'){
        icone = '/assets/dash/img/icons-banks/Banco Safra S.A.-black.svg'
      } else if(card.codigoBancario == '033'){
        icone = '/assets/dash/img/icons-banks/Banco Santander S.A-black.svg'
      } else if(card.codigoBancario == '756'){
        icone = '/assets/dash/img/icons-banks/Banco Sicoob S.A.-black.svg'
      } else if(card.codigoBancario == '748'){
        icone = '/assets/dash/img/icons-banks/Banco Sicredi S.A.-black.svg'
      } else {
        icone = '/assets/dash/img/icons-banks/outros-black.svg';
      }
      newCard.innerHTML = `
          <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row mt-2">
              <img class="w-10 me-3 mb-0 cartao-info" src="${icone}" alt="logo">
              <h6 class="mb-0 cartao-info">${card.agencia} / ${card.conta}</h6>
              <button type="button" class="btn p-0 m-0 ms-auto btn-deletar" data-bs-toggle="modal"
                  data-bs-target="#modalDelCardBanco" data-bs-whatever="Deletar"
                  data-card-id="${id}" data-agencia="${card.agencia}" data-numeroconta="${card.conta}" data-logo="${icone}">
                  <img title="Delete" src="/assets/dash/img/icons/delete.svg" alt="Delete">
              </button>
          </div>
      `;

      const cardContainer = document.getElementById('cards-container');
      cardContainer.appendChild(newCard);

      const deleteButton = newCard.querySelector('.btn-deletar');
      deleteButton.addEventListener('click', function () {
          const agencia = deleteButton.getAttribute('data-agencia');
          const numeroConta = deleteButton.getAttribute('data-numeroconta');
          const logo = deleteButton.getAttribute('data-logo');
          const cardID = deleteButton.getAttribute('data-card-id');
          preencherModalDeletar(agencia, numeroConta, logo, cardID);
      });
  }

  // Função para remover um cartão do DOM e do banco de dados
  async function removeCardFromDatabase(cardID) {
      try {
          // Adicione uma chamada para excluir os dados do banco de dados
          const response = await axios.delete(`http://localhost:3001/api/cartoes/delete/${cardID}`);
          console.log(response.data); // Exiba a resposta do servidor no console
      } catch (error) {
          console.error(error);
      }
  }

  document.getElementById('modalDeletarButton').addEventListener('click', async function () {
      const matricula = document.querySelector('input[name="Matricula"]').value;
      const senha = document.querySelector('input[name="Senha"]').value;
      const cardID = this.getAttribute('data-card-id');

      if (matricula === admMatricula && senha === admSenha) {
          removeCardFromDOM(cardID);
          removeCardFromDatabase(cardID);

          const modalDelCardBanco = new bootstrap.Modal(document.getElementById('modalDelCardBanco'));
          modalDelCardBanco.hide();
      } else {
          alert('Matrícula e/ou senha de administrador incorretas. Apenas o administrador pode excluir cartões.');
      }
  });

  try {
      const response = await axios.get('http://localhost:3001/api/cartoes/get/');
      console.log(response);
      const cartoesDoBanco = response.data;

      // Iterar sobre os cartões do banco e criar os cards dinamicamente
      cartoesDoBanco.forEach((cartao) => {
          createCard(cartao, cartao.id); // Certifique-se de ajustar a propriedade ID conforme a estrutura do seu banco de dados
      });
  } catch (error) {
      console.error(error);
  }
});

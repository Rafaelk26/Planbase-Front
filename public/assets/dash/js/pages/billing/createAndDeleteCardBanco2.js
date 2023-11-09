document.getElementById('adicionarCartao').addEventListener('click', function() {
    const agencia = document.querySelector('input[name="Agência"]').value;
    const numeroConta = document.querySelector('input[name="NúmeroConta"]').value;
    const taxa = document.querySelector('input[name="Taxa"]').value;
    const tipoCobranca = document.querySelector('select[name="TipoCobranca"]').value;
    const instituicaoBancaria = document.querySelector('select[name="InstituicaoBancaria"]').value;

    const cartao = {
        Agencia: agencia,
        NumeroConta: numeroConta,
        Taxa: taxa,
        TipoCobranca: tipoCobranca,
        InstituicaoBancaria: instituicaoBancaria
    };

    // Fazer uma requisição Axios para enviar os dados ao servidor
    axios.post('http://localhost:3001/api/cartoes', cartao)
    .then(response => {
      // Se a requisição for bem-sucedida, você pode realizar ações adicionais aqui
      console.log('Dados do cartão enviados com sucesso:', response.data);
      // Limpe o formulário ou realize outras ações necessárias
      limparFormulario();
      // Criar um novo cartão no front-end
      createCard(cartao, cartaoID);
      cartaoID++;
    })
    .catch(error => {
      // Se ocorrer um erro na requisição, você pode lidar com ele aqui
      console.error('Erro ao enviar dados do cartão:', error);
    });
    
    const modalElement = document.getElementById('exampleModal3');
    const modal = new bootstrap.Modal(modalElement);
    modal.hide();
});

function createCard(card, id) {
    const newCard = document.createElement('div');
    newCard.className = 'col-md-6 mb-md-0 mb-4';

    newCard.id = `cartao-${id}`;

    newCard.innerHTML = `
        <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row mt-2">
            <img class="w-10 me-3 mb-0 cartao-info" src="/assets/dash/img/icons-banks/${card.InstituicaoBancaria.toLowerCase()}-black.svg" alt="logo">
            <h6 class="mb-0 cartao-info">${card.Agencia} / ${card.NumeroConta}</h6>
            <button type="button" class="btn p-0 m-0 ms-auto btn-deletar" data-bs-toggle="modal"
                data-bs-target="#modalDelCardBanco" data-bs-whatever="Deletar"
                data-card-id="cartao-${id}" data-agencia="${card.Agencia}" data-numeroconta="${card.NumeroConta}" data-logo="/assets/dash/img/icons-banks/${card.InstituicaoBancaria.toLowerCase()}-black.svg">
                <img title="Delete" src="/assets/dash/img/icons/delete.svg" alt="Delete">
            </button>
        </div>
    `;

    const cardContainer = document.getElementById('cards-container');
    cardContainer.appendChild(newCard);

    const deleteButton = newCard.querySelector('.btn-deletar');
    deleteButton.addEventListener('click', function() {
        const agencia = deleteButton.getAttribute('data-agencia');
        const numeroConta = deleteButton.getAttribute('data-numeroconta');
        const logo = deleteButton.getAttribute('data-logo');
        const cardID = deleteButton.getAttribute('data-card-id');
        preencherModalDeletar(agencia, numeroConta, logo, cardID);
    });
}

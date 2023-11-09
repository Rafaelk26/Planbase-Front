document.addEventListener('DOMContentLoaded', function() {

    const fornecedores = [];

    const admMatricula = 'mb'; 
    const admSenha = 'sb'; 

    let fornecedorID = 0;

    document.getElementById('adicionarFornecedor').addEventListener('click', function() {
        const nomeFornecedor = document.querySelector('input[name="Nome Fornecedor"]').value;
        const tipoContrato = document.querySelector('select[name="tipoContrato Fornecedor"]').value;
        const valorFornecedor = document.querySelector('input[name="Valor Fornecedor"]').value;
        const contatoFornecedor = document.querySelector('input[name="Contato Fornecedor"]').value;

        const fornecedor = {
            ID: fornecedorID,
            Nome: nomeFornecedor,
            TipoContrato: tipoContrato,
            Valor: valorFornecedor,
            Contato: contatoFornecedor
        };

        fornecedores.push(fornecedor);

        createFornecedorCard(fornecedor, fornecedorID);

        fornecedorID++;

        limparFormulario();

        const modalElement = document.getElementById('modalFornecedor');
        const modal = new bootstrap.Modal(modalElement);
        modal.hide();
    });

    function createFornecedorCard(fornecedor, id) {
        const newCard = document.createElement('div');
        newCard.className = 'col-md-6 list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg';
    
        newCard.id = `fornecedor-${id}`;
    
        newCard.innerHTML = `
            <div class="d-flex flex-column">
                <h6 class="mb-3 text-sm">${fornecedor.Nome}</h6>
                <span class="mb-2 text-xs">Tipo do contrato: <span class="text-dark font-weight-bold ms-sm-2">${fornecedor.TipoContrato}</span></span>
                <span class="mb-2 text-xs">Contato Empresarial: <span class="text-dark ms-sm-2 font-weight-bold">${fornecedor.Contato}</span></span>
                <span class="text-xs">Valor do Contrato: <span class="text-dark ms-sm-2 font-weight-bold">${fornecedor.Valor}</span></span>
            </div>
            <div class="ms-auto text-end">
                <button type="button" class="btn btn-link text-danger text-gradient px-3 mb-0" data-toggle="modal" data-target="#modalDelCardFornecedor" data-id="${id}" data-nome="${fornecedor.Nome}" data-valor="${fornecedor.Valor}">
                    <i class="material-icons text-sm me-2">delete</i>Delete
                </button>
            </div>
        `;
    
        const cardContainer = document.getElementById('card-fornecedor-container');
        cardContainer.appendChild(newCard);
    
        // Adicione um event listener para o botão de exclusão
        const deleteButton = newCard.querySelector('button');
        deleteButton.addEventListener('click', function() {
            excluirFornecedor(id, fornecedor.Nome, fornecedor.Valor);
        });
    }

    function excluirFornecedor(id, nome, valor) {
        // Abre o modal e define os detalhes específicos do fornecedor
        const modalDelCardFornecedor = new bootstrap.Modal(document.getElementById('modalDelCardFornecedor'));
        modalDelCardFornecedor.show();
    
        // Define o ID, nome e valor do fornecedor no modal de exclusão
        document.getElementById('modalFornecedorInfo').textContent = nome;
        document.getElementById('modalFornecedorInfoValor').textContent = valor;
    
        // Adicione um event listener ao botão "Deletar" do modal de exclusão
        const modalDeletarFornecedorButton = document.getElementById('modalDeletarFornecedorButton');
        modalDeletarFornecedorButton.addEventListener('click', function() {
            const matricula = document.querySelector('input[name="Matricula Forn"]').value;
            const senha = document.querySelector('input[name="Senha Forn"]').value;
    
            if (matricula === admMatricula && senha === admSenha) {
                removerFornecedorDoDOM(id);
                modalDelCardFornecedor.hide();
            } else {
                alert('Matrícula e/ou senha de administrador incorretas. Apenas o administrador pode excluir fornecedores.');
            }
        });
    }
    
    // Função para remover o card do DOM
    function removerFornecedorDoDOM(id) {
        const fornecedorParaOcultar = document.getElementById(`fornecedor-${id}`);
        if (fornecedorParaOcultar) {
            fornecedorParaOcultar.remove();
        }
    }
});

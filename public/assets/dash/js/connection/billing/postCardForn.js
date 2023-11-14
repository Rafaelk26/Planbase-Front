document.addEventListener("DOMContentLoaded", async function () {
    const admMatricula = 'mb';
    const admSenha = 'sb';
    let fornecedorID = 0;

    const form = document.querySelector("#cadastrarFornforBack");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const nome = form.NomeFornecedor.value;
        const tipo = form.TipoContrato.value;
        const valorContrato = form.ValorFornecedor.value;
        const contato = form.ContatoFornecedor.value;

        const fornecedor = {
            id: fornecedorID,
            nome: nome,
            tipo: tipo,
            valorContrato: valorContrato,
            contato: contato
        };


        createFornecedorCard(fornecedor, fornecedorID);

        fornecedorID++;

        limparFormulario();

        try {
            // Adicione uma chamada para salvar os dados no banco de dados
            const response = await axios.post('http://localhost:3001/api/forn/', fornecedor);
            console.log(response.data); // Exiba a resposta do servidor no console
        } catch (error) {
            console.error('Erro ao salvar fornecedor:', error);
        }

        const modalElement = new bootstrap.Modal(modalFornecedorForm);
        modalElement.hide();
    });

    function createFornecedorCard(fornecedor, id) {
        const newCard = document.createElement('div');
        newCard.className = 'col-md-6 list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg';
    
        newCard.id = `${id}`;
    
        newCard.innerHTML = `
            <div class="d-flex flex-column">
                <h6 class="mb-3 text-sm">${fornecedor.nome}</h6>
                <span class="mb-2 text-xs">Tipo do contrato: <span class="text-dark font-weight-bold ms-sm-2">${fornecedor.tipo}</span></span>
                <span class="mb-2 text-xs">Contato Empresarial: <span class="text-dark ms-sm-2 font-weight-bold">${fornecedor.contato}</span></span>
                <span class="text-xs">Valor do Contrato: <span class="text-dark ms-sm-2 font-weight-bold">${fornecedor.valorContrato}</span></span>
            </div>
            <div class="ms-auto text-end">
                <button type="button" class="btn btn-link text-danger text-gradient px-3 mb-0" data-toggle="modal" data-target="#modalDelCardFornecedor" data-id="${id}" data-nome="${fornecedor.nome}" data-valor="${fornecedor.valorContrato}">
                    <i class="material-icons text-sm me-2">delete</i>Delete
                </button>
            </div>
        `;
    
        const cardContainer = document.getElementById('card-fornecedor-container');
        cardContainer.appendChild(newCard);
    
        // Adicione um event listener para o botão de exclusão
        const deleteButton = newCard.querySelector('button');
        deleteButton.addEventListener('click', function() {
            excluirFornecedor(id, fornecedor.nome, fornecedor.valorContrato);
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
        modalDeletarFornecedorButton.addEventListener('click', async function() {
            const matricula = document.querySelector('input[name="Matricula Forn"]').value;
            const senha = document.querySelector('input[name="Senha Forn"]').value;
            
            if (matricula === admMatricula && senha === admSenha) {
                removerFornecedorDoDOM(id);
                await removerFornecedorDoDatabase(id);
                modalDelCardFornecedor.hide();
            } else {
                alert('Matrícula e/ou senha de administrador incorretas. Apenas o administrador pode excluir fornecedores.');
            }
        });
    }
    
    // Função para remover o card do DOM
    function removerFornecedorDoDOM(id) {
        const fornecedorParaOcultar = document.getElementById(`${id}`);
        if (fornecedorParaOcultar) {
            fornecedorParaOcultar.remove();
        }
    }
    
    // Função para remover um fornecedor do banco de dados
    async function removerFornecedorDoDatabase(id) {
        try {
            // Adicione uma chamada para excluir os dados do banco de dados
            const response = await axios.delete(`http://localhost:3001/api/forn/delete/${id}`);
            console.log(response.data); // Exiba a resposta do servidor no console
        } catch (error) {
            console.error('Erro ao excluir fornecedor do banco de dados:', error);
            throw error; // Rejeite o erro para que possa ser tratado externamente, se necessário
        }
    }

    try {
        // Busca e exibe os fornecedores
        const responseFornecedores = await axios.get('http://localhost:3001/api/forn/get/');
        console.log(responseFornecedores);
        const fornecedoresDoBanco = responseFornecedores.data;

        // Itera sobre os fornecedores do banco e cria os cards dinamicamente
        fornecedoresDoBanco.forEach((fornecedor) => {
            createFornecedorCard(fornecedor, fornecedor.id); // Certifique-se de ajustar a propriedade ID conforme a estrutura do seu banco de dados
        });
    } catch (error) {
        console.error('Erro ao buscar fornecedores:', error);
    }
});

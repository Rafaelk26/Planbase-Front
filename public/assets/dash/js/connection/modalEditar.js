document.addEventListener("DOMContentLoaded", function () {
const editarButtons = document.querySelectorAll(".editar-btn");

editarButtons.forEach(button => {
    button.addEventListener("click", function () {
    const registroID = button.getAttribute("data-id");

    // Use Axios para buscar os detalhes do registro
    axios.get(`http://locahost:3001/api/registros/${registroID}`)
        .then(response => {
        const dadosRegistro = response.data;
        // Preencha o modal de edição com os dados do registro
        document.querySelector('input[name="TituloEditar"]').value = dadosRegistro.titulo;
        document.querySelector('select[name="CategoriaEditar"]').value = dadosRegistro.categoria;
        document.querySelector('input[name="ValorEditar"]').value = dadosRegistro.valor;
        document.querySelector('select[name="qtdParcelaEditar"]').value = dadosRegistro.qtdParcelas;
        document.querySelector('select[name="DestinatarioEditar"]').value = dadosRegistro.destinatario;
        document.querySelector('select[name="FornecedorEditar"]').value = dadosRegistro.fornecedor;
        document.querySelector('input[name="NotaFiscalEditar"]').value = dadosRegistro.notaFiscal;
        document.querySelector('select[name="StatusEditar"]').value = dadosRegistro.status;
        document.querySelector('select[name="PagamentoEditar"]').value = dadosRegistro.pagamento;
        document.querySelector('input[name="DataEditar"]').value = dadosRegistro.data;
        document.querySelector('textarea[name="HistoricoEditar"]').value = dadosRegistro.historico;

        // Abra o modal de edição
        $('#modalEditar').modal('show');
        })
        .catch(error => {
        console.error(error);
        });
    });
});
});

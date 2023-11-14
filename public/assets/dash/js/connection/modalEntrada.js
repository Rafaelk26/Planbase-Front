
document.addEventListener("DOMContentLoaded", (event) => {

    const form = document.querySelector("#formEntradasModal");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const titulo = form.tituloEntrada.value;
      const categoria = form.categoriaEntrada.value;
      const tipo = form.tipoEntrada.value;
      const data = form.dataEntrada.value;
      const valor = form.valorEntrada.value;
      const historico = form.historicoEntrada.value;
      const status = form.statusEntrada.value;
      const notaFiscal = form.notaFiscalEntrada.value;
      const parcela = form.qtdParcelaEntrada.value;
      const destinatario = form.destinatarioEntrada.value;
      const fornecedor = form.fornecedorEntrada.value;
      const pagamento = form.pagamentoEntrada.value;
  
      const formData = { titulo, categoria, tipo, data, valor, historico, status , notaFiscal , parcela, destinatario, fornecedor, pagamento }
  
      try {
        const response = await axios.post('http://localhost:3001/api/registros/entradas', formData);
      } catch (error) {
        console.error(error);
      }
  
    });
  
  });
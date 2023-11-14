document.addEventListener("DOMContentLoaded", (event) => {

    const form = document.querySelector("#formSaidasModal");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const titulo = form.tituloSaida.value;
      const categoria = form.categoriaSaida.value;
      const tipo = form.tipoSaida.value;
      const data = form.dataSaida.value;
      const valor = form.valorSaida.value;
      const historico = form.historicoSaida.value;
      const status = form.statusSaida.value;
      const notaFiscal = form.notaFiscalSaida.value;
      const parcela = form.qtdParcelaSaida.value;
      const destinatario = form.destinatarioSaida.value;
      const fornecedor = form.fornecedorSaida.value;
      const pagamento = form.pagamentoSaida.value;
  
      const formData = { titulo, categoria, tipo, data, valor, historico, status , notaFiscal , parcela, destinatario, fornecedor, pagamento }
  
      try {
        const response = await axios.post('http://localhost:3001/api/registros/saidas', formData);
      } catch (error) {
        console.error(error);
      }
  
    });
  
  });
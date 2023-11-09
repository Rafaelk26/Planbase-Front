function calcularEInserirValores(classeElementos, elementoInserir) {
    const valores = document.querySelectorAll(classeElementos);
    const elementoInserirValor = document.getElementById(elementoInserir);

    let valorParaInserir = 0.00;

    for(let i = 0; i < valores.length; i++){
        valorParaInserir += parseFloat(valores[i].textContent.replace(',', '.'));
    }

    elementoInserirValor.innerText = valorParaInserir.toFixed(2);
}
calcularEInserirValores('.value-table-receita', 'value-insert-receita-here');

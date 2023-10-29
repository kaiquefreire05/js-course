function Contar() {
    var inicio = Number(document.getElementById('txt_inicio').value);
    var passo = Number(document.getElementById('txt_passo').value);
    var fim = Number(document.getElementById('txt_fim').value);
    var resultado = document.getElementById('res');

    resultado.innerHTML = ""; // Limpar o elemento de resultado antes de exibir a contagem

    // Verificar se os valores são válidos
    if (isNaN(inicio) || isNaN(passo) || isNaN(fim)) {
        resultado.innerHTML = "Por favor, insira números válidos.";
        return; // Sair da função se algum dos valores de entrada não for um número
    }

    // Verificar se o passo é zero ou negativo
    if (passo <= 0) {
        resultado.innerHTML = "O passo deve ser maior que zero.";
        return; // Sair da função se o passo for inválido
    }

    // Realizar a contagem e exibir o resultado e ainda verificar se é crescente ou descrente
    if (inicio < fim) {
        // Contagem crescente
        for (var c = inicio; c <= fim; c += passo) {
            resultado.innerHTML += `${c} \u{1F449}`;
        }
    } else {
        // Contagem decrescente
        for (var c = inicio; c >= fim; c -= passo) {
            resultado.innerHTML += `${c} \u{1F449}`;
        }
    }
    resultado.innerHTML += `\u{1F3C1}`
    
    // Deixando as respostas no centro
    resultado.style.textAlign = 'center';
}
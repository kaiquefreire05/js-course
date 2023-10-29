numeros = [];

function Adicionar() {
    let numero_add = Number(document.getElementById('txt_num').value);
    let tabela_numeros = document.getElementById('slc_vals');

    if (isNaN(numero_add) || numero_add === '') {
        window.alert('Por favor, insira um valor ou um valor válido!')
        return; //Impede que a função siga executando.
    } else {
        tabela_numeros.innerHTML += `<option>O número ${numero_add} foi adicionado.</option>`;
        numeros.push(numero_add);

        // LIMPANDO O CAMPO DE NÚMERO
        document.getElementById('txt_num').value = '';
    }
}

function Finalizar() {
    let resp = document.getElementById('respostas');

    // Calculando a soma usando o método reduce
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

    resp.innerHTML = `Temos ${numeros.length} valores nessa lista.<br>`;
    resp.innerHTML += `O maior valor dessa lista é ${Math.max(...numeros)}.<br>`;
    resp.innerHTML += `O menor valor dessa lista é ${Math.min(...numeros)}.<br>`;
    resp.innerHTML += `A soma dos valores é ${soma}.<br>`;
    resp.innerHTML += `A média dos valores é ${soma / numeros.length}`;
}


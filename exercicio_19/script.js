function Calcular() {
    // Pegando o número que vai ser a tabuada
    var numero = Number(document.getElementById('txt_valor').value);
    // Onde vai ser a resposta
    var resposta = document.getElementById('seltab');

    if (numero < 0) {
        window.alert('O valor deve ser maior ou igual a 0');
        resposta.innerHTML = '<option>O valor deve ser maior ou igual a 0</option>';
        return;
    } else {
        resposta.innerHTML = ''; // Limpar o conteúdo anterior
        for (var p = 0; p <= 10; p++) {
            resposta.innerHTML += `<option>${numero} * ${p} = ${numero * p}</option>`;
        }
    }
}
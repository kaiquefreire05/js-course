function Verificar() {
    var data = new Date(); // Pegando a data
    var ano = data.getFullYear(); // Pegando o ano atual
    var fano = document.getElementById('txtano');
    var resultado = document.getElementById('res');

    // Se o form do ano for igual a zero e esse mesmo form form maior que o ano atual vai ocorrer msg de erro.
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
    // Senão ele vai pegar os dados
        var fsex = document.getElementsByName('radsex'); // Pegando os valores dos radius buttons
        var idade = ano - Number(fano.value); // Calculando a idade
        var genero = '' // Essa variável vai receber valor depois
        var img = document.createElement('img'); // Criando uma imagem pelo js
        img.setAttribute('id', 'foto'); // Criando id 

        if (fsex[0].checked) { // Se a radiu button selecionada foi a primeira ele ele é masculino [0]
            genero = 'Homem' // A variavel passa a receber homem
            if (idade >= 0 && idade < 10) { // Condições de idade para mostras a foto masculina correta
                // Criança
                img.setAttribute('src', 'criança_m.png'); // Definindo a imagem
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'rapaz.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto.png');
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.png');
            }

        } else if (fsex[1].checked) { // Se a radiu button selecionada foi a segunda ele ele é feminino [1]
            genero = 'Mulher' // A variavel passa a receber mulher
            if (idade >= 0 && idade < 10) { // Condições de idade para mostras a foto feminina correta
                // Criança
                img.setAttribute('src', 'criança_f.png'); // Definindo a imagem
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'moça.png');
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'adulta.png');
            } else {
                // Idosa
                img.setAttribute('src', 'idosa.png');
            }
        }
        resultado.style.textAlign = 'center'; // Colocando o resultado no centro
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.` // Mostrando genêro e idade
        resultado.appendChild(img) // Mostrando a imagem correta
        img.style.width = '250px' // Mudando largura imagem
        img.style.height = '250px' // Mudando tamanho imagem
    }
}
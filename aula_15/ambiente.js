let autos = [5, 8, 4];

autos[3] = 6; // Adicionando um valor em uma posição específica
autos.push(7); // Adicionando valor diretamente na última posição
autos.sort(); // Organizando os valores

console.log(`O array tem ${autos.length} posições.`);
console.log(`O primeiro valor do vetor é ${autos[0]}`);

/*for (let pos=0;pos < autos.length; pos ++){
    console.log(`A posição ${pos} tem o valor ${autos[pos]}`);

}
*/

for (let pos in autos){
    console.log(`A posição ${pos} tem o valor ${autos[pos]}`);
}

let pos = autos.indexOf(12);
if (pos == -1) {
    console.log('Esse valor não foi encontrado.')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 84.4,
    engordar(p=0){
        console.log('Engordou...')
        this.peso += p;
    }
}

console.log(`${amigo.nome} pesa ${amigo.peso} KG.`)
amigo.engordar(8)
console.log(`${amigo.nome} pesa ${amigo.peso} KG.`)
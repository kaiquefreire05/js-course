function fatorial(pn) {
    let fat = 1;
    for(let c = pn; c > 1; c--){
        fat *= c
    }
    return fat;
}

console.log(fatorial(5));
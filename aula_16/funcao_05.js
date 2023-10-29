// RECURSIVIDADE
function fatorial(pn){
    if(pn == 1){
        return 1;
    } else {
        return pn * fatorial(pn-1);
    }
}

console.log(fatorial(5))
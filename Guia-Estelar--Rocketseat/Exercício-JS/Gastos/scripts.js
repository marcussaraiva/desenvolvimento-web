let gasto = {
    receitas: [],
    despesas: []
}

function calcularSaldo(gasto){
    let total_receitas = 0//= sum(gasto.receitas)
    let total_despesas = 0//= sum(gasto.despesas)
    let saldo = 0

    for(receita of gasto.receitas){
        total_receitas += receita
    }
    for(despesa of gasto.despesas){
        total_despesas += despesa
    }

    saldo = total_receitas - total_despesas
    
    return console.log(saldo>=0 ? `O saldo POSITIVO de R$ ${saldo.toFixed(2)}`: `O saldo NEGATIVO de R$ ${saldo.toFixed(2)}`) 
}


function getRandomNumber(min,max){
    return Math.random()*(max-min)+min
}

let i = 0

while(i<10){
    gasto.receitas[i] = getRandomNumber(0,1000)
    i++
}
i = 0
while(i<10){
    gasto.despesas[i] = getRandomNumber(0,1000)
    i++
}

console.log(gasto)
calcularSaldo(gasto)
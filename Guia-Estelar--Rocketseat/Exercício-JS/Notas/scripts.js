function converterNotas(nota){
    if(nota >= 90){
        nota = 'A'
    } else if(nota >= 80){
        nota = 'B'
    } else if(nota >= 70){
        nota = 'C'
    } else if(nota >= 60){
        nota = 'D'
    } else{
        nota = 'F'
    }

    return nota
}

function getRandomNumber(min,max){
    return Math.random()*(max-min)+min
}

let notas = []
let i=0

while(i<10){
    notas[i] = getRandomNumber(0,100)
    i++
}

console.log(notas)

for(let nota in notas){
    console.log(`Nota: ${notas[nota]} -> ` + converterNotas(notas[nota]))
}
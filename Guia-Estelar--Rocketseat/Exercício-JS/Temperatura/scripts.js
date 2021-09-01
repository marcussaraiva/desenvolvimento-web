// Receber string em celcius ou fahrenheit e converter
// C =  (F - 32) * 5/9
// F = C * 9/5 + 32
let celcius = '30'
let fahrenheit = '86'
let celcius_fahrenheit
let fahrenheit_celcius

function toCelcius(fahrenheit) {
    let celcius
    fahrenheit = Number(fahrenheit)
    celcius = (fahrenheit - 32) * 5/9
    return celcius
}

function toFahrenheit(celcius) {
    let fahrenheit
    celcius = Number(celcius)
    fahrenheit = celcius * 9/5 + 32
    return fahrenheit 
}

console.log(`${fahrenheit} Fahrenheit ->`, String(toCelcius(fahrenheit))+`º Celcius`)
console.log(`${celcius}º Celcius ->`, String(toFahrenheit(celcius)), `Fahrenheit`)
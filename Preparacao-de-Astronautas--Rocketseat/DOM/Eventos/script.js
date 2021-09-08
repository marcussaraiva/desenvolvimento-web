// Event
// pode acionar um evento quando utilizar "on" no HTML
function print(){
    console.log('click')
}
const input = document.querySelector('input')
input.onkeydown = function (){
    console.log('Key Down')
}

// addEventListener('tipo de evento', função a ser executada)
const h2 = document.querySelector('h2')
h2.addEventListener('mouseover', print)

// Argumento event
input.onkeydown = function(event){
    console.log(event.key)
}
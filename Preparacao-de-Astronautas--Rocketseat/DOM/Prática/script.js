// Tornar visível a div ao clique
// Ao teclar ESC tornal invisível novamente

// quando clicar no #openModal disparar uma função que
// altera o nome da classe para tirar o 'invisible' (toggle também poderia ser usado)
const button    = document.querySelector('#openModal')
const div         = document.querySelector('button').nextElementSibling
const body      = document.querySelector('body')

function click() {
    div.classList.remove('invisible')
}

button.addEventListener('click', click)
body.addEventListener('keydown',
    function(event){
        if(div.classList.contains('invisible') == false){
            if(event.key === 'Escape') div.classList.add('invisible')
        }
    }
)

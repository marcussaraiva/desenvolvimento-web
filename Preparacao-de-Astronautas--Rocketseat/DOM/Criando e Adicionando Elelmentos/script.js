// Criando elemento

// createElement() -> criar o elemento
const div = document.createElement('div')
const h2 = document.createElement('h2')
const h3 = document.createElement('h3')
div.innerText = 'div adicionada via js'
h2.innerText = 'h2 adicionado via js'
h3.innerText = 'h3 adicionado via js'
 
// append prepend -> adicionar o elemento
const body = document.querySelector('body')
body.append(div) // Adiciona depois do último filho
body.prepend(div) // Adiciona antes do primeiro filho

// insertBefore
body.insertBefore(h2, body.querySelector('section'))

// Gabiarra para inserir após
body.insertBefore(h3,
        body.querySelector('section').nextSibling
    )
//  textContent
const text_content = document.querySelector('#page-title')
text_content.textContent = 'Título da Página'
// text_content.textContent += ' Concatenado com Título da Página'
console.log(text_content.textContent)
// -------------------------------------------------------------------------------
// innerText
const inner_text = document.querySelector('#section-title')
inner_text.innerText = 'Novo título da Seção'
console.log(inner_text.innerText)
// -------------------------------------------------------------------------------
// innerHTML
const inner_html = document.querySelector('#page-title')
inner_html.innerHTML += '<br><br>' // Posso mudar o conteúdo sem concatenar
// -------------------------------------------------------------------------------
// value
const value = document.querySelector('#input-text')
// value.value = "Valor manipulado" //Atribuindo valor
// Recebendo o valor
console.log(value.value) //Juntamente com a atribuição do elemento value no html
// -------------------------------------------------------------------------------
// Atributos (setAttribute())
const header = document.querySelector('header')
header.setAttribute('id', 'page-header')
const header_id = document.querySelector('#page-header')
console.log(header_id)
// console.log(header_id.getAttribute('id'))
// removeAttribute()
// getElementById()
//  Return: element 
const by_id = document.getElementById('page-title')
console.log("getElementById()")
console.log(by_id)
// getElementByClassName() -> não aceita forEach
//  Return: HTMLCollection 
const by_class = document.getElementsByClassName('title')
console.log("getElementByClassName()")
console.log(by_class)
// getElementsByTagName()
//  Return:  HTMLCollection
const by_tag = document.getElementsByTagName('meta')
console.log('getElementsByTagName()')
console.log(by_tag)
// querySelector()
//  Return:  element
const query_selector = document.querySelector('.title') //.->indicador CSS de classe
console.log('querySelector()')
console.log(query_selector)
// querySelectorAll() -> aceita forEach
//  Return:  Nodelist
const query_selector_all = document.querySelectorAll('[class]') //[]->pelo atributo
console.log('querySelectorAll()')
console.log(query_selector_all)




// MÓDULOS NATIVOS

// Função para realizar modulos dentro do node
const path = require('path')

console.log(`MÓDULOS NATIVOS\n${path.basename(__filename)}\n`)

// MEUS MÓDULOS
const my_module = require('./exports')

console.log(`MEUS MÓDULOS\n${my_module}`)
const { inherits } = require('util');
const { EventEmitter } = require('events');

function Character (name){
    this.name = name
}

inherits(Character, EventEmitter);

const cap_america = new Character("Capitão América");

cap_america.on("avangers", () => console.log(`${cap_america.name}: Assemble!`));

console.log("Avangers...");
cap_america.emit("avangers");
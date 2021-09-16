const { EventEmitter } = require('events');
const ev = new EventEmitter();

// ev.on("Emitindo algo", (message) =>{
//     console.log(`${message} foi ouvido(a)`);
// });

ev.once("Emitindo algo", (message) =>{
    console.log(`${message} foi ouvido(a)`);
});

ev.emit("Emitindo algo", "William");
ev.emit("Emitindo algo", "Maria");
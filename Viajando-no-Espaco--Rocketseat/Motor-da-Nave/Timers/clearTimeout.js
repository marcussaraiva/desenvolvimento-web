// clearTimeour(setTimeout()) serve para cancelar um timeOut 
const timeOut = 3000;
const callback = () => console.log("Callback");
let timer = setTimeout(callback, timeOut);
clearTimeout(timer)
const interval = 1000;
const repeat = () => console.log("Repeat!");
const set_interval = setInterval(repeat, interval);

setTimeout(() => clearInterval(set_interval), 5500);
const getFlagContent = require('./exports');

console.log(`Hi, my name is ${getFlagContent('--name')} and ${getFlagContent('--greeting')}!`)
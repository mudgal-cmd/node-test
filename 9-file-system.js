const fileSystem = require('fs');

const first = fileSystem.readFileSync('./content/first.txt', 'utf-8');

console.log(first);

const second = fileSystem.readFileSync('./content/second.txt', 'utf8');

console.log(second);

const result = fileSystem.writeFileSync('./content/result-sync.txt', `The result is: ${first + ' '+ second}`, {flag :'w'});
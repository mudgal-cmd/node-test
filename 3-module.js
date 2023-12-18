const sayHi = require('./first-module');
const name = require('./2-module'); 

const {name1, name2} = name;

// console.log(func);
console.log(`Name 1 is: ${name1} and Name 2 is: ${name2}`);

sayHi(name1);
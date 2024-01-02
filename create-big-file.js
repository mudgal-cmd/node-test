const {writeFileSync} = require('fs');

for(let i=0; i<10000; i++){
  writeFileSync('./content/big.txt', `This is ${i}\n`, {flag: 'a'});
}
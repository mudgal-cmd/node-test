const fs = require('fs');

fs.readFile('./content/first.txt', 'utf-8', ((err, result)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log(result);
})
);
const data = 'My name is Nishant Mudgal';
fs.writeFile('./content/result-async.txt', data, {flag: 'a'}, (err)=>{
  if(err){
    throw err
  }

  console.log('Data is written');
  
});

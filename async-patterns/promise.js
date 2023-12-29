const {readFile}  = require('fs');

// readFile('./content/first.txt', 'utf-8', (err, data)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject('Error occured :' +err);
      }
      resolve(data);
    });
  });
}

let myPromise = getText('./content/first1.txt');

myPromise.then((value) => {
  console.log(`The file content is: ${value}`);
}).catch((err) => {
  console.log(err);
});


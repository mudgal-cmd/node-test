const {readFile, writeFile} = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);

const writeFilePromise = util.promisify(writeFile);

async function readData(){
  try{
    const first = await readFilePromise('./content/first.txt', 'utf-8');
    const second = await readFilePromise('./content/second.txt', 'utf-8');
    // await writeFile('./content/promise-result.txt', `This file is the result of using promises, ${first}, ${second}`);
    await writeFilePromise('./content/promise-result.txt', `This file is the result of using promises, ${first}, ${second}`, {flag: 'a'});
    console.log(first);
    console.log(second);
  }
  catch(err){
    console.log(err);
  }
}

readData();

console.log('Replaced promise with async-await.');

// const arr = ['Mango', 'Apple', 'Banana'];

// console.log(arr.sort());

// const a = [5, 1, 9, 2];

// console.log(a.sort((a,b)=> a-b));
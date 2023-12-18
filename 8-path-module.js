const path = require('path');

console.log(path.sep);

const filePath = path.join(`${path.sep}content`,'subfolder','test.txt');

console.log(filePath);

console.log(path.basename(filePath));
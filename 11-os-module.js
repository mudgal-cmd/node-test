const os = require('os');

const user = os.userInfo();

console.log(user);

console.log(os.uptime());

const currentOs = {
  name: os.type(),
  freeMemory: os.freemem(),
  release: os.release(),
  totalMemory: os.totalmem()
};

console.log(currentOs);
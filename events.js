const EventEmitter = require('events');

const customEmitter = new EventEmitter();

const http = require('http');

const server = http.createServer();
//const customEmitter = new EventEmitter(); - We do not need the event emitter class's instance to process the response, since http inherits from the EventEmitter class. In a nutshell, the http class itself is a reference to EventEmitter - we don't need the object of EventEmitter.
server.on('request', (req, res)=>{
  if(req.url === '/'){
    res.end(`
      <h1>I am the response</h1>
    `);
  }
});

server.listen(5000);

// customEmitter.on('response', (...args)=>{
//   console.log(`Hi I am a response: ${args}`);
// });

// customEmitter.emit('response', 'Nishant', 26, 'I am learning Express');
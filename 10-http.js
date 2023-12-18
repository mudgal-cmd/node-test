const http = require('http');

const server = http.createServer((req, res)=>{

  if(req.url === '/'){
    res.end('Hi! Welcome to our Website');
  }
  else if(req.url === '/contact-us'){
    res.end('You can reach out to us on +1 867-213-2213');
  }
  else{
    res.writeHead(404, {'Content-Type': 'text/HTML'});
    res.end(`
  <h2>Oops! We can't seem to locate the page you are looking for.</h2>

  <h3>Please try again later</h3>

  <a href="/">Back Home</a>

  `);
  }
  

});

server.listen(5000);
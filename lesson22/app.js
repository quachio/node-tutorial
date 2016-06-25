var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/contact-us') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if (req.url === '/api/ninjas') {
    var ninjas = [{ name: 'ryu', age: 29 }, { name: 'hung', age: 38 }]; // Array of object, get info
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('yo dawg, now listening to port 3000');

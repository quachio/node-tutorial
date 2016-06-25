var http = require('http');
var fs   = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', { encoding: 'utf8' });

myReadStream.on('data', (chunk) => {  // Listen for data
  console.log('new chunk received:');
  console.log(chunk);
});

/*
var server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // Response Header
  res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('yo dawg, now listening to port 3000');
*/

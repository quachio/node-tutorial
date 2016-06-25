var http = require('http');
var fs   = require('fs');

var myReadStream  = fs.createReadStream(__dirname + '/readMe.txt', { encoding: 'utf8' });
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

/*
myReadStream.on('data', (chunk) => {  // Listen for data from muReadStream
  console.log('new chunk received:');
  myWriteStream.write(chunk);
});
*/

myReadStream.pipe(myWriteStream); // Same thing as above code, piping from readable to writable

/*
var server = http.createServer((req, res) => {
  console.log('request was made: ' + req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' }); // Response Header
  res.end('Hey ninjas');
});

server.listen(3000, '127.0.0.1');
console.log('yo dawg, now listening to port 3000');
*/

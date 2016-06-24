// Asynchronuous way of creating directory and othe rstuff
var fs = require('fs');

fs.mkdir(__dirname + '/' + 'stuff', () => {
  fs.readFile(__dirname + '/' + 'readme.txt', 'utf8', (err, data) => {
    fs.writeFile(__dirname + '/' + 'stuff' + '/' + 'writeMe.txt', data);
  });
});

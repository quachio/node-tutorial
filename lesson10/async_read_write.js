var fs = require('fs');
var path = require('path');

var basepath = __dirname + '/';
var filename = basepath + 'readme.txt';

console.log(path.basename(filename));

fs.readFile(filename, 'utf8', (err, data) => { // use this => to replace function
  if (err) throw err;
  console.log(data);
  fs.writeFile(basepath + 'writeMe.txt', data);
}); // using this will not block the code

console.log('test');

/*
var fs = require('fs');
var filename = __dirname + '/' + 'readme.txt';

fs.readFile(filename, 'utf8', function (err, data)  { // use this => to replace function
  if (err) throw err;
  console.log(data);
});
*/

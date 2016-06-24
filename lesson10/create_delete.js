const fs   = require('fs');
const path = require('path');
const util = require('util');

var basepath = __dirname + '/';
var filename = basepath + 'writeMe.txt';
var logfile  = basepath + 'log.txt';

fs.stat(filename, function (err, stats) {
  console.log(util.inspect(stats));
  console.log(err);
  if (err == null) {
    console.log('File exists');
    fs.unlink(filename); // delete file
  } else if (err.code == 'ENOENT') {
    // file does not exists
    fs.writeFile(logfile, 'writeMe.txt does not exist\n');
    console.log('File does not exist');
  } else {
    console.log('Some other error: ', err.code);
  }
});

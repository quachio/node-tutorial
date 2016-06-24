var fs = require('fs');

const basepath = __dirname + '/';
console.log(basepath);

fs.unlink(basepath + 'stuff' + '/' + 'writeMe.txt', () => {
  fs.rmdir(basepath + 'stuff');
});

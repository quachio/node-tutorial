const fs       = require('fs');
const util     = require('util');
const path     = require('path');
const readline = require('readline');

const basepath  = __dirname + '/';

const rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout,
});

const createDir = (name) => {
  fs.mkdir(basepath + name, (err) => {
    if (err) throw err;
    fs.stat(basepath + name, (err, stats) => {
      if (err) throw err;
      console.log('Create Directory: ' + name);
      console.log(`stats: ${JSON.stringify(stats)}`);
    });
  });
  rl.close();
};

const removeDir = (name) => {
  fs.rmdir(basepath + name, (err) => {
    if (err) throw err;
    console.log('Remove Directory: ' + name);
    rl.close();
  });
};

rl.question('Create or Remove Directory: [create:delete] ', (answer) => {
  if (answer.toLowerCase() == 'create') {
    rl.question('Enter directory name: ', createDir);
  } else if (answer.toLowerCase() == 'delete') {
    rl.question('Enter directory name: ', removeDir);
  }
});

/*
const createDir = function (name) {
  fs.stat(basepath + name, function (err, stats) {
    if (err == null) {
      console.log(name + ' Already existed');
      rl.close();
    } else if (err.code == 'ENOENT') {
      fs.mkdirSync(__dirname + '/' + name);
      console.log('Create Directory: ' + name);
      rl.close();
    }
  });
};
*/

/*
const removeDir = function (name) {
  fs.stat(basepath + name, function (err, stats) {
    if (err == null) {
      console.log(name + ' Already existed');
      rl.close();
    } else if (err.code == 'ENOENT') {
      fs.rmdirSync(__dirname + '/' + name);
      console.log('Delete Directory');
      rl.close();
    }
  });
};
*/

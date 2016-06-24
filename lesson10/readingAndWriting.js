// How to read file
var fs = require('fs');

// Blocking code, won't move on to next code if this is not complete
var readme = fs.readFileSync('/Users/quachio/GitHub/node-tutorial/readme.txt', 'utf8');
fs.writeFileSync('/Users/quachio/GitHub/node-tutorial/writeMe.txt', readme);

console.log(readme);

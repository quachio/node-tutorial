console.log('hey ninjas');

setTimeout(function () {
  console.log('3 seconds have passed');
}, 3000);

var time  = 0;

var timer = setInterval(function () {
  time += 2;
  console.log(time + '3 seconds have passed');
  if (time > 5) {
    clearInterval(timer);
  }
}, 2000);

// Global Object
console.log(__dirname);
console.log(__filename);

// normal function statement
function sayHi() {
  console.log('hi');
}

sayHi();

// Passing a function into another function
function callFunction(fun) {
  fun();
}

// Function expression
var sayBye = function () {
  console.log('bye');
};

sayBye();

callFunction(sayBye);

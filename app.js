var events = require('events'); // This a node module is an event emitter

var util = require('util');

var myEmitter = new events.EventEmitter();

// When someEvent is trigger a call back function is call This function listen fo the someEvent
myEmitter.on('someEvent', function (msg) {
  console.log(msg);
});

myEmitter.emit('someEvent', 'the event was emitted'); // trigger the event

var Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var ryu = new Person('Rry');
var people = [james, mary, ryu];

people.forEach(function (person) {
  person.on('speak', function (msg) {
    console.log(person.name + ' said: ' + msg);
  });
});

james.emit('speak', 'hey dude');
rye.emit('speak', 'I want a curr');

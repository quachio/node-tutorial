
// Setting up Express for template engine and routing the barebone
var express = require('express');

var app = express();

// Wehen a user goes /, it will fire the function (req, res)
app.get('/', (req, res) => {
  res.send('this is the homeage');
});

app.get('/contact', (req, res) => {
  res.send('this is the contact page');
});

// This listen form HTTP request
app.listen(3000); // The app returned by express() is in fact a JavaScript Functio
// HTTP Request Methods
// - GET
// - POST
// - DELETE
// - PUT

// Responding to Requets
// - GET - app.get('rounte', fn)
// - POS - app.post('route', fn)
// - DELETE - app.delete('route', fn)

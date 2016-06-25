// Setting up Express for template engine and routing the barebone

var express = require('express');

var app = express();

// Static

app.get('/', (req, res) => {
  res.send('this is the homeage');
});

app.get('/contact', (req, res) => {
  res.send('this is the contact page');
});

// Dynamic
app.get('/profile/:id', (req, res) => {
  res.send('You requested to see a profile with the id of ' + req.params.id);
});

app.get('/profile/:name', (req, res) => {
  res.send('You requested to see a profile with the name of ' + req.params.name);
});

app.listen(3000);

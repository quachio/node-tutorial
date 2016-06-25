// Setting up Express for template engine and routing the barebone
var express = require('express');
var app = express();

// Tell express which template engine to use
app.set('view engine', 'ejs');

// Static

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

// Dynamic, Javascript Templete Engine - EJS
app.get('/profile/:name', (req, res) => {
  // res.send('You requested to see a profile with the name of ' + req.params.name);
  // Passing this data object to the profile

  var data = { age: 29, job: 'ninja' };
  res.render('profile.ejs', { person: req.params.name, data: data });
});

app.listen(3000);

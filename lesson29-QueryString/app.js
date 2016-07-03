// Setting up Express for template engine and routing the barebone
var express = require('express');
var app = express();

// Tell express which template engine to use
app.set('view engine', 'ejs');

/*
app.use('/assets', function (req, res, next) {
  console.log(req.url);
  next();
});
*/

// Example of express handling middlare to serve static file
app.use('/assets', express.static('assets'));

// Static

app.get('/', (req, res) => {
  console.log(req.url);

  //res.sendFile(__dirname + '/index.html');

  res.render('index');
});

app.get('/contact', (req, res) => {
  console.log(req.url);
  console.log(req.query);
  res.render('contact', { qs: req.query }); // Example of passing in data to contact views
});

/*
app.get('/styles.css', (req, res) => {
  res.sendFile(__dirname + '/styles.css');
});
*/

// Dynamic, Javascript Templete Engine - EJS
app.get('/profile/:name', (req, res) => {
  // res.send('You requested to see a profile with the name of ' + req.params.name);
  // Passing this data object to the profile

  var data = { age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing'] };
  res.render('profile.ejs', { person: req.params.name, data: data });
});

app.listen(6969);

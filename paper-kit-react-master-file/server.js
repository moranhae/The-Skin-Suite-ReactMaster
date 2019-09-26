const express = require('express');
const path = require('path');
const port = 8080; 
const app = express();

app.use(express.static(path.join(__dirname, 'build', index.html )));
app.get('/', function (req, res) {
    res.send('build/index.html')
  })
app.get('/ServicesPage', function (req, res) {
    res.send('ServicesPage')
  })
  app.get('/ProductPage', function (req, res) {
    res.send('ProductPage')
  })
  app.get('/TeamPage', function (req, res) {
    res.send('TeamPage')
  })
  app.get('/ReviewsPage', function (req, res) {
    res.send('ReviewsPage')
  })
  app.get('/BookPage', function (req, res) {
    res.send('BookPage')
  })
  app.get('{0,}', function (req, res) {
    res.send('build/index.html')
  })
app.listen(port);
console.log('Server Started!');
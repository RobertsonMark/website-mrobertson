var express = require('express');
var path = require('path');

const PORT = process.env.PORT || 5000;

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
});

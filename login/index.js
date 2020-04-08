var express = require('express');
var path = require('path');
var app = express();

app.use(express.json());

var folder = path.join(__dirname, 'public');
app.use(express.static(folder));

app.use('/usuario', require('./api/usuario'));

app.listen(5000, function() {
  console.log('Servidor corriendo en puerto 5000...')
});
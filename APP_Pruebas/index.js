var express = require('express');
var path = require("path");
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@workapes-9hxh3.mongodb.net/pruebas?retryWrites=true&w=majority',
 {useNewUrlParser:true, useUnifiedTopology:true});   

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use('/registroEspecializado', require('./servicios/especializado.js'));
app.use('/registroClasico', require('./servicios/clasico.js'));


app.listen(5252, function(){
    console.log("servidor corriendo en el 5252")
});
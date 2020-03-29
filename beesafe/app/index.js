var express = require('express');
var path = require("path");
var app = express();
var mongoose = require('mongoose');
// var multer = require('multer'); //para cargar imagenes al servidor se necesita instalar

mongoose.connect('mongodb+srv://admin:admin@workapes-9hxh3.mongodb.net/pruebas?retryWrites=true&w=majority',
 {useNewUrlParser:true, useUnifiedTopology:true})
 .then(db => console.log(`Base de datos conectada`))
 .catch(err => console.error(err));



/* const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})

app.use(multer({storage}).single('image')); 
app.use(express.urlencoded({extended: false})); */

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use('/registroEspecializado', require('./servicios/servicioEspecializado.js'));
app.use('/registroClasico', require('./servicios/servicioClasico.js'));
app.use('/registroCaracteristicaVehiculo', require('./servicios/servicioCaracteristicaVehiculo'));
app.use('/registroTipoSiniestro', require('./servicios/servicioTipoSiniestro'));


app.listen(5252, function(){
    console.log("servidor corriendo en el puerto 5252")
});
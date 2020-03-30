var express = require('express');
var path = require("path");
var app = express();
var mongoose = require('mongoose');
var multer = require('multer'); 

mongoose.connect('mongodb+srv://admin:admin@workapes-9hxh3.mongodb.net/pruebas?retryWrites=true&w=majority',
 {useNewUrlParser:true, useUnifiedTopology:true})
 .then(db => console.log(`Base de datos conectada`))
 .catch(err => console.error(err));



const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/assets/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})

app.use(multer({storage}).single('image')); 
app.use(express.urlencoded({extended: false})); 



app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

    //registrar usuarios
app.use('/registroUsuarioEspecializado', require('./servicios/registroUsuarioEspecializado.js'));
app.use('/registroUsuarioClasico', require('./servicios/registroUsuarioClasico.js'));
app.use('/registroUsuarioRutas', require('./servicios/registroUsuarioRutas'));


app.use('/registroCaracteristicaVehiculo', require('./servicios/registroCaracteristicaVehiculo'));
app.use('/registroVehiculo', require('./servicios/registroVehiculo'));
app.use('/registroTipoSiniestro', require('./servicios/registroTipoSiniestro'));
app.use('/listadoUsuarios', require('./servicios/listarUsuarios'));


app.listen(5252, function(){
    console.log("servidor corriendo en el puerto 5252")
});
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
        cb(null, file.originalname); // new Date().getTime() + path.extname
    }
})

app.use(multer({storage}).single('image')); 
app.use(express.urlencoded({extended: false})); 



app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// recibir llamados

// Verificar Usuario , LOGIN
app.use('/login', require('./servicios/login'));


    //registrar y listar usuarios
app.use('/registroUsuarioEspecializado', require('./servicios/registroUsuarioEspecializado.js'));
app.use('/registroUsuarioClasico', require('./servicios/registroUsuarioClasico.js'));
app.use('/registroUsuarioRutas', require('./servicios/registroUsuarioRutas'));
app.use('/listarUsuarios', require('./servicios/listarUsuarios'));
app.use('/listarUsuario', require('./servicios/listarUsuario'));

app.use('/listarRutas', require('./servicios/listarRutas'));


    //Registrar y listar Vehiculo
app.use('/registroCaracteristicaVehiculo', require('./servicios/registroCaracteristicaVehiculo'));
app.use('/registroVehiculo', require('./servicios/registroVehiculo'));
app.use('/listarCaracteristicasVehiculo', require('./servicios/listarCaracteristicasVehiculo'));
app.use('/listarVehiculo', require('./servicios/listarVehiculo'));

    //Registrar,listar,modificar,eliminar Categoria Incidente 
app.use('/registroCategoriaIncidente', require('./servicios/registroCategoriaIncidente'));
app.use('/listarCategoriaIncidente', require('./servicios/listarCategoriaIncidente'));
app.use('/modificarCategoriaIncidente', require('./servicios/modificarCategoriaIncidente'));
app.use('/eliminarCategoriaIncidente', require('./servicios/eliminarCategoriaIncidente'));

  //Registrar,listar,modificar,eliminar Tipo Vehiculo 
app.use('/registroTipoVehiculo', require('./servicios/registroTipoVehiculo'));
app.use('/listarTipoVehiculo', require('./servicios/listarTipoVehiculo'));
app.use('/modificarTipoVehiculo', require('./servicios/modificarTipoVehiculo'));
app.use('/eliminarTipoVehiculo', require('./servicios/eliminarTipoVehiculo')); 

    //Registrar,listar,modificar,eliminar Tipo Vehiculo
app.use('/registroMetodoPago', require('./servicios/registroMetodoPago'));
app.use('/listarMetodoPago', require('./servicios/listarMetodoPago'));
app.use('/modificarMetodoPago2', require('./servicios/modificarMetodoPago2'));
app.use('/eliminarMetodoPago2', require('./servicios/eliminarMetodoPago2')); 




app.listen(5252, function(){
    console.log("servidor corriendo en el puerto 5252")
});
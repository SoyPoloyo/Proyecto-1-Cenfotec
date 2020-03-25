
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Estudiante = require('../schema/especializado');

router.post('/registroEspecializado', function(req,res){
    var especializadoNuevo = new Especializado({
       _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        apellido: req.body.nombre,
        edad: req.body.edad,
        correo: req.body.correo,
        raza: req.body.raza,
        cedula: req.body.cedula
    });
    especializadoNuevoNuevo.save()
    .then(
        function(resultado){
    res.json(resultado);
})
    .catch(function(error){
        console.log(error);
    });
});
module.exports = router;
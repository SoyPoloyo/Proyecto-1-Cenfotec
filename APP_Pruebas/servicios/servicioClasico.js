
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Clasico = require('../schema/clasico');

router.post('/insertar', function(req,res){

    var clasicoNuevo = new Clasico({

       _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        correo: req.body.correo,
        tipoCedula: req.body.tipoCedula,
        cedula: req.body.cedula

    });

    clasicoNuevo.save()
    .then(
        function(resultado){
    res.json(resultado);
})
    .catch(function(error){
        console.log(error);
    });
});
module.exports = router;
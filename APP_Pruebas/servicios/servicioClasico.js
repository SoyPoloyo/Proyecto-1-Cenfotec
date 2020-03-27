
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Clasico = require('../schema/modeloClasico');

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

router.get("/recibir", function(req, res) {

    var nombre = req.body.nombre;
  
    Clasico.find({nombre:nombre })
      .exec()
  
      .then(function(result) {
        res.json(result);
      })
  
      .catch(function(err) {
        console.log(err);
      });


  });
module.exports = router;
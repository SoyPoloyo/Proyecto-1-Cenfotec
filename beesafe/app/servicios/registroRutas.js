const nodemailer = require("nodemailer");
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");


var CrearRuta = require("../schema/modeloListarRutas");

router.post("/insertar", async function(req, res) {


  
  var crearRutaNueva = new CrearRuta({
    _id: new mongoose.Types.ObjectId(),
    nombreRuta: req.body.nombreRuta,
    cordenadasRuta: req.body.cordenadasRuta,
    estado: req.body.estado
   
  });

  crearRutaNueva.save()
    .then(function(resultado) {
      res.json(resultado);
    })
    .catch(function(error) {
      console.log(error);
    });

  

});


module.exports = router;

const nodemailer = require("nodemailer");
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Asistencia = require("../schema/modeloSiniestroAsistencia");
router.post("/insertar", async function (req, res) {
  console.log(req.file);
  var asistenciaNueva = new Asistencia({
    _id: new mongoose.Types.ObjectId(),
    
    metodoPago: req.body.tarjetasDisponibles,
    usuarioSolicitante: req.body.usuarioSolicitante,
    tipoVehiculo: req.body.tipoVehiculo,
   
    image: req.file.filename,
  });
  console.log(asistenciaNueva.image);
  
  asistenciaNueva
    .save()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (error) {
      console.log(error);
    });


});


module.exports = router;

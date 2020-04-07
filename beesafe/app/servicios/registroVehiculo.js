var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var registroVehiculo = require('../schema/modeloRegistroVehiculo.js');

router.post('/insertar', function (req, res) {
    var VehiculoNuevo = new registroVehiculo({
        _id: new mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        placaVehi: req.body.placaVehi,
        modelo: req.body.modelo,
        anno: req.body.anno,
        marca_vehiculo: req.body.marca_vehiculo,
    });
    VehiculoNuevo.save()
        .then(function (result) {
            res.json(result);
        })
        .catch(function (error) {
            console.log(error);
        });
    });
    const transporter = nodemailer.createTransport({
        host: "mail.sincorbata.net",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "beesafe@sincorbata.net", // generated ethereal user
          pass: "admin" // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
        }
      });
    
      const infoCorreo = await transporter.sendMail({
        from: '"BeeSafe 👻" <beesafe@sincorbata.net>', // sender address
        to: req.body.correo, // list of receivers
        subject: "Hola ✔", // Subject line
        html: "<b>ultimo correo A</b>" // html body
      });
    router.get("/recibir", function(req, res) { 
    
      Usuario.find({})
        .exec()
    
        .then(function(result) {
          res.json(result);
        })
    
        .catch(function(err) {
          console.log(err);
        });
    
    
    });
    
    module.exports = router;
    
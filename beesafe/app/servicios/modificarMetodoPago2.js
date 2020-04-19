var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var TipoVehiculo = require("../schema/modeloMetodoPago");


router.put('/editar/:id', function (req, res) {

  TipoVehiculo.updateOne({ _id: req.params.id }, 
      { $set: req.body },
      function (error, info) {
          if (error) {
              res.json({
                  resultado: false,
                  msg: 'No se pudo modificar el cliente',
                  err
              });
          } else {
              res.json({
                  resultado: true,
                  info: info
              })
          }
      }
  )
  
});

module.exports = router;
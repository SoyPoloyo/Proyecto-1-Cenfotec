var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var modificarUsuarios = require("../schema/modeloUsuarios");


router.put('/editar/:id', function (req, res) {

    modificarUsuarios.updateOne({ _id: req.params.id }, 
      { $set: req.body },
      function (error, info) {
          if (error) {
              res.json({
                  resultado: false,
                  msg: 'No se pudo el metodo de pago',
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

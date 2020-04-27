var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const SiniestroAsistencia = require('../schema/modeloSiniestroAsistencia')


router.get("/recibir", function (req, res) {

  SiniestroAsistencia.find()
    .exec()

    .then(function (result) {
      res.json(result);
    })

    .catch(function (err) {
      console.log(err);
    });


});



router.post("/recibirClasico", function (req, res) {

  usuarioSolicitante = req.body.usuarioSolicitante

  SiniestroAsistencia
    .find({ usuarioSolicitante: usuarioSolicitante })
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.post("/recibirEspecializado", function (req, res) {

  usuarioEspecializado = req.body.usuarioEspecializado

  SiniestroAsistencia
    .find({ usuarioEspecializado: usuarioEspecializado })
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (error) {
      console.log(error);
    });

});

module.exports = router;
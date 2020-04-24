var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const SiniestroAsistencia = require('../schema/modeloSiniestroAsistencia')


router.get("/recibir", function(req, res) { 

    SiniestroAsistencia.find()
      .exec()
  
      .then(function(result) {
        res.json(result);
      })
  
      .catch(function(err) {
        console.log(err);
      });
  
  
  });
  
  module.exports = router;
const nodemailer = require("nodemailer");
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const listarVehiculos = require('../schema/modeloVehiculo.js');


router.get("/recibir", function(req, res) { 

    listarVehiculos.find()
      .exec()
  
      .then(function(result) {
        res.json(result);
      })
  
      .catch(function(err) {
        console.log(err);
      });
  
  
  });
  
  module.exports = router;
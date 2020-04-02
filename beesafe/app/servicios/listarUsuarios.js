const nodemailer = require("nodemailer");
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const ListarUsuarios = require('../schema/modeloUsuarios.js');


router.get("/recibir", function(req, res) { 

    ListarUsuarios.find()
      .exec()
  
      .then(function(result) {
        res.json(result);
      })
  
      .catch(function(err) {
        console.log(err);
      });
  
  
  });
  
  module.exports = router;
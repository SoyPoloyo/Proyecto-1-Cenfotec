const nodemailer = require("nodemailer");
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var usuarios = require("../schema/modeloListarUsuarios");



router.get("/mostrar", function(req, res) {

  usuarios.find().exec()

    .then(function(result) {
      res.json(result);
     
    })

    .catch(function(err) {
      console.log('estoy dando error');
    });


});

module.exports = router;

const nodemailer = require("nodemailer");
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");


var Usuario = require("../schema/modeloUsuarios");
router.post("/insertar", async function(req, res) {

  
  var usuarioNuevo = new Usuario({
    _id: new mongoose.Types.ObjectId(),
    tipoUsuario: 1,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad,
    correo: req.body.correo,
    tipoCedula: req.body.tipoCedula,
    cedula: req.body.cedula,
    
  });

  usuarioNuevo
    .save()
    .then(function(resultado) {
      res.json(resultado);
    })
    .catch(function(error) {
      console.log(error);
    });

  const transporter = nodemailer.createTransport({
    host: "mail.alineacr.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "beesafe@alineacr.com", // generated ethereal user
      pass: "admin" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const infoCorreo = await transporter.sendMail({
    from: '"BeeSafe 🐝" <beesafe@alineacr.com">', // sender address
    to: "vargasteban@gmail.com" , // list of receivers
    subject: "Bienvenido a BeeSafe ✔", // Subject line
    html: "<b>ultimo correo A</b>" // html body

    // html body
  });

});


module.exports = router;

const nodemailer = require("nodemailer");
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Usuario = require("../schema/modeloUsuarios");
router.post("/insertar", async function(req, res) {
  var usuarioNuevo = new Usuario({
    _id: new mongoose.Types.ObjectId(),
    tipoUsuario: 2,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad,
    correo: req.body.correo,
    tipoCedula: req.body.tipoCedula,
    cedula: req.body.cedula,
    tipoAsistencia: req.body.tipoAsistencia,
    image:req.file.filename
  });
  console.log(usuarioNuevo.image)

  usuarioNuevo
    .save()
    .then(function(resultado) {
      res.json(resultado);
    })
    .catch(function(error) {
      console.log(error);
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

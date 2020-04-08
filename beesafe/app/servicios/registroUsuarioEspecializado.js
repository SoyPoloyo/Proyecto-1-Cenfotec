const nodemailer = require("nodemailer");
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Usuario = require("../schema/modeloUsuarios");
router.post("/insertar", async function (req, res) {
  console.log(req.file);
  var usuarioNuevo = new Usuario({
    _id: new mongoose.Types.ObjectId(),
    tipoUsuario: 2,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    password: req.body.password,
    edad: req.body.edad,
    correo: req.body.correo,
    tipoCedula: req.body.tipoCedula,
    cedula: req.body.cedula,
    tipoAsistencia: req.body.tipoAsistencia,
    image: req.file.filename,
  });
  console.log(usuarioNuevo.image);
  
  usuarioNuevo
    .save()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (error) {
      console.log(error);
    });

  const transporter = nodemailer.createTransport({
    host: "mail.alineacr.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "beesafe@alineacr.com", // generated ethereal user
      pass: "admin", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const infoCorreo = await transporter.sendMail({
    from: '"BeeSafe 🐝" <beesafe@sincorbata.net>', // sender address
    to: req.body.correo, // list of receivers
    subject: "Bienvenido a BeeSafe ✔", // Subject line
    html: `<!doctype html>
    <html>
     <head>
         <style>button:hover{cursor: pointer; 
             background-color:#cc5d01 ;
             }
         </style> 
     </head> 
     <body style="text-align: center;
                  background-image:url('fondoabeja.png'); 
                  background-repeat: no-repeat ; 
                  background-size: cover; "> 
         <img src='../../assets/img/BEESAFE.png' width='30%'> 
         <h1>BeeSafe</h1> 
         <p>Gracias por registrarse en nuestra aplicación</p>
         <p>Le recordamos cambiar su contraseña una vez ingrese a la aplicación</p>
         <input type="button" onclick="location.href='http://localhost:5252/index.html';" value="Iniciar Sesion" />
     </body>
</html>`,

    // html body
  });
});


module.exports = router;

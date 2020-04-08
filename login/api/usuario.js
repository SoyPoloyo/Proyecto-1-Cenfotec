var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://armando_user:armando_pass@armandodb-tkbov.mongodb.net/Universidad?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

var Usuario = require('../Schemas/usuario');

router.post('/login', function(req, res) {
  var correo = req.body.correo;
  var contrasena = req.body.contrasena;
  Usuario.find({correo: correo}).exec()
  .then(
    function(result){
      res.json(result);
    }
  )
  .catch(
    function(err){
      console.log(err);
    }
  );
})

module.exports = router;
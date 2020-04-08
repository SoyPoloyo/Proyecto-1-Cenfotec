var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  correo: String,
  contrasena: String
});

module.exports = mongoose.model('Usuario', usuarioSchema, 'Usuarios');
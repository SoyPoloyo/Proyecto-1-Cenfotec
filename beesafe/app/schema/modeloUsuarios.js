var mongoose = require("mongoose");

var usuarios = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tipoUsuario:Number,
  nombre: String,
  apellido: String,
  edad: Number,
  correo: String,
  password: String,
  tipoCedula: Number,
  cedula: Number,
  tipoAsistencia: String,
  image: String,
  metodoPago: String,
});

module.exports = mongoose.model( "Usuario", usuarios,"Usuarios");

var mongoose = require("mongoose");

var especializadoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  apellido: String,
  edad: Number,
  correo: String,
  tipoCedula: String,
  cedula: String
});
module.exports = mongoose.model( "Especializado", especializadoSchema,"usuarioEspecializdo");

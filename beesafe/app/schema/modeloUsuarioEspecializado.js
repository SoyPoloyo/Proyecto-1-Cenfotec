var mongoose = require("mongoose");

var especializadoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  apellido: String,
  edad: Number,
  correo: String,
  tipoCedula: Number,
  cedula: Number,
  tipoAsistencia: String,
  imagen: String
});

module.exports = mongoose.model( "Especializado", especializadoSchema,"especializados");

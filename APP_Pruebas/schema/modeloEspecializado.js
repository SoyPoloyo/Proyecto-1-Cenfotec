var mongoose = require("mongoose");

var especializadoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  apellido: String,
  edad: Number,
  correo: String,
  tipoCedula: Number,
  cedula: Number
});

module.exports = mongoose.model( "Especializado", especializadoSchema,"especializados");

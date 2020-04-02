var mongoose = require("mongoose");

var rutasSchemas = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre:String,
  apellido: String,
  edad: Number,
  correo: String,
  tipoCedula: Number,
  cedula: Number,
  tipoAsistencia: String
});

module.exports = mongoose.model( "ruta", rutasSchemas,"rutas");

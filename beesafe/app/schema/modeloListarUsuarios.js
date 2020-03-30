var mongoose = require("mongoose");

var usuariosSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  apellido: String,
  correo: String,

});

module.exports = mongoose.model( "usuariosSchema", usuariosSchema);
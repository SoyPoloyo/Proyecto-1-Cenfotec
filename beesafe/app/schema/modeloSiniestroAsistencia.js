var mongoose = require("mongoose");

var modeloSiniestroAsistencia = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tipoVehiculo:String,
  usuarioSolicitante: String,
  descripcion: String,
  image: String,
  ruta: String,
  metodoPago:String,
  usuarioEspecializado:String
});

module.exports = mongoose.model( "SiniestroAsistencia", modeloSiniestroAsistencia,"SiniestroAsistencias");

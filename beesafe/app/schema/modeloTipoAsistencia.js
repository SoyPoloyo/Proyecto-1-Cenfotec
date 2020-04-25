var mongoose = require("mongoose");

var tipoAsistenciasSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  caracteristica: String,
  descripcion: String
});

module.exports = mongoose.model("TipoAsistencia", tipoAsistenciasSchema, "TipoAsistencias");

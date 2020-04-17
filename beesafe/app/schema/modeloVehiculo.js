
var mongoose = require("mongoose");

var vehiculoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  placaVehi: String,
  modelo: String,
  anno: Number,
  marca_vehiculo: String,
  identificador: String
});

module.exports = mongoose.model( "vehiculo", vehiculoSchema ,"Vehiculos");
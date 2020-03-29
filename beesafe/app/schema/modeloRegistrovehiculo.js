var mongoose = require("mongoose");

var registroVehiculoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  placaVehi: float,
  modelo: String,
  anno: float,
  marca_vehiculo: String,
});

module.exports = mongoose.model( "registarVehiculo", registrarVehiculoSchema ,"registrarVehiculos");
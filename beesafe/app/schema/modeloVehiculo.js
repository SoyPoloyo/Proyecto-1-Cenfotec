var mongoose = require("mongoose");

var listarVehiculoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  placa: Number,
  modelo: String,
  año: Number,
  marca: String

});

module.exports = mongoose.model( "vehiculo", listarVehiculoSchema ,"listarVehiculos");
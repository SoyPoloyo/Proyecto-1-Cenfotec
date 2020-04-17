var mongoose = require("mongoose");

var listarVehiculoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  placa: Number,
  modelo: String,
  año: Number,
  marca: String,
  identificador: String

});

module.exports = mongoose.model( "vehiculo", listarVehiculoSchema ,"listarVehiculos");
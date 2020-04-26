
var mongoose = require("mongoose");

var vehiculoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  placaVehi: String,
 
 
  marca_vehiculo: String,
  identificador: String,
  chofer:String,
  activado:Boolean
});

module.exports = mongoose.model( "vehiculo", vehiculoSchema ,"Vehiculos");
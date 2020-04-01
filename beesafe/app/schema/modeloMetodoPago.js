var mongoose = require("mongoose");

var metodoPagoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre:String,
  numeroTarjeta: Number,
  fecha: String,
  cvv: Number,
 
});

module.exports = mongoose.model( "MetodoPago", metodoPagoSchema,"MetodoPago");

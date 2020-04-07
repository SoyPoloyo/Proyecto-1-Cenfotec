var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var registroVehiculoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: String,
  placaVehi: Number,
  modelo: String,
  anno: Number,
  marca_vehiculo: String
});

module.exports = mongoose.model( "registroVehiculo", registroVehiculoSchema ,"registroVehiculos");
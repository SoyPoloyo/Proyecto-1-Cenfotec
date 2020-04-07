var mongoose = require("mongoose");

var rutasSchemas = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombreRuta:String,
  cordenadasRuta:String

});

module.exports = mongoose.model( "ListaRuta", rutasSchemas,"ListaRutas");

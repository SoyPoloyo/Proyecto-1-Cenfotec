var mongoose = require("mongoose");

var caracteristicasVehiculoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: { Type: String, required: true},
  required: [true, "No se ha colocado el nombre de la caracterstica"]
});
app.post("/register", function(req, res){
  const newUser
})
module.exports = mongoose.model( "caracteristicasVehiculo", caracteristicasVehiculoSchema ,"caracteristicasVehiculos");

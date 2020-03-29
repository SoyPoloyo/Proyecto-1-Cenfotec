var mongoose = require("mongoose");

var caracteristicasVehiculoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nombre: { Type: String, required: true},
  descripcion: [true, "No se ha colocado el nombre de la caracterstica"]
});
const carac = new mongoose.model("user", carac.Schema);
app.post("/insertar", function(req, res){
  const nuevaCarac = new carac({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion

  });
  nuevaCarac.save(function(err){
    if(err){
      Console.log(err);
    } else{
      Console.log('usted ha sido registrado');

    }
  })

})
module.exports = mongoose.model( "caracteristicasVehiculo", caracteristicasVehiculoSchema ,"caracteristicasVehiculos");

var express = require("express");
var router = express.Router();
/* var path = require('path');
var fs-extra = require('fs-extra');
var unlink = fs-extra.unlink();
const { unlink } = require('fs-extra'); */

var TipoVehiculo = require('../schema/modeloTipoVehiculo');

router.delete('/borrar/:id', async (req, res) => {
    const tipoVehiculo = await TipoVehiculo.findByIdAndDelete(req.params.id);
    /* await unlink(path.resolve('./backend/public/' + tipoVehiculo.imagePath)); Borrar img del servidor */ 
    res.json({message: 'Tipo de Vehiculo Eliminado'});
    //res.redirect('/modulos/buscar/buscarTipoVehiculo') Esto lo tengo que borrar 
});



module.exports = router;

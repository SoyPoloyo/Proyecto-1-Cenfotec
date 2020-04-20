var express = require("express");
var router = express.Router();


var eliminarRuta = require('../schema/modeloListarRutas');

router.delete('/borrar/:id', async (req, res) => {
    const EliminarRuta = await eliminarRuta.findByIdAndDelete(req.params.id); 
    res.json({message: 'Ruta eliminada'});
});


module.exports = router;

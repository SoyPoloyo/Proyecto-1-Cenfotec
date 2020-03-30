const { Router } = require('express');
const router = Router();

const TipoSiniestro = require('../schema/modeloTipoSiniestro');


router.post('/insertar', async (req, res) => {
    const { nombre, descripcion } = req.body;
    const imagen = '/assets/uploads/' + req.file.filename;
    const newTipoSiniestro = new TipoSiniestro({ nombre, descripcion, imagen });
    console.log(newTipoSiniestro);
    await newTipoSiniestro.save();
    res.json({'mensaje': 'Tipo de siniestro guardado'});
});


router.get('/mostrar', async (req, res) => {

    TipoSiniestro.find().exec()
    .then(function(result) {
        res.json(result);
      })
      .catch(function(err) {
        console.log(err);
      });
    
});


/* router.delete('/:id', async (req, res) => {
    const tipoSiniestro = await TipoSiniestro.findByIdAndDelete(req.params.id);
    res.json({'mensaje': 'Tipo de siniestro eliminado'});
}); */

module.exports = router;
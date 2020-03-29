const { Router } = require('express');
const router = Router();

const TipoSiniestro = require('../schema/modeloTipoSiniestro');

/* router.get('/', async (req, res) => {
    const tipoSiniestros = await TipoSiniestro.find();
    res.json(tipoSiniestros);
}); */

router.post('/insertar', async (req, res) => {
    const { nombre, descripcion } = req.body;
    const imagen = '/uploads/' + req.file.filename;
    const newTipoSiniestro = new TipoSiniestro({ nombre, descripcion, imagen });
    console.log(newTipoSiniestro);
    await newTipoSiniestro.save();
    res.json({'mensaje': 'Tipo de siniestro guardado'});
});

/* router.delete('/:id', async (req, res) => {
    const tipoSiniestro = await TipoSiniestro.findByIdAndDelete(req.params.id);
    res.json({'mensaje': 'Tipo de siniestro eliminado'});
}); */

module.exports = router;
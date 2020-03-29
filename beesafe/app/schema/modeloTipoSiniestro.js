const { Schema, model } = require('mongoose');

const TipoSiniestroSchema = new Schema({

    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String },
    creado_en: { type: Date, default: Date.now }
});

module.exports = model('TipoSinietro', TipoSiniestroSchema);


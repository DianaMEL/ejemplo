const mongoose = require('mongoose');

const egresoSchema = mongoose.Schema ({
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuarios'
    },
    cantidad: {
        type: Number,
        required: true
    },
    fecha_egreso: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Egresos', egresoSchema);
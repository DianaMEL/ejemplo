const mongoose = require('mongoose');

const ingresoSchema = mongoose.Schema ({
    cantidad: {
        type: Number,
        required: true
    },
    fecha_ingreso: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('Ingresos', ingresoSchema);
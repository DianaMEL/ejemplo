const mongoose = require('mongoose');

const ventaSchema = mongoose.Schema ({
    productos: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    fecha_venta: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('Ventas', ventaSchema);
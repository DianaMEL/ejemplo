const mongoose = require('mongoose');

const productoSchema = mongoose.Schema ({
    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fecha_producto: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('Productos', productoSchema);
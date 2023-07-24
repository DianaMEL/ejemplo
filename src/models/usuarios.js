const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombreUsuario:{
        type: String,
        required: true,
        unique: true,
        index: true
    },
    nombre:{
        type: String,
        required: true
    },
    contraseña:{
        type: String,
        required: true 
    },
    huella:{
        type: String
    },
});

module.exports = mongoose.model('Usuarios', usuarioSchema);
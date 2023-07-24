const express = require('express');
const Usuarios = require('../models/usuarios');

const router = express.Router();

// crear usuario
router.post('/crear_usuario', (req,res) => {
    const usuario = Usuarios(req.body);
    usuario
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener usuarios
router.get('/usuarios', (req,res) => {
    Usuarios
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }));
});

// obtener usuario por id
router.get('/usuarios/:id', (req,res) => {
    const {id} = req.params;
    Usuarios
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }));
});

// obtener usuario por nombre de usuario
router.get('/usuarios/:nombreUsuario', (req,res) => {
    const nombreUsuario = req.params.nombreUsuario;
    Usuarios
    .findOne({nombreUsuario: nombreUsuario})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }));
});

// actualizar usuario
router.put('/actualizar_usuario/:id', (req,res) => {
    const {id} = req.params;
    const { nombreUsuario, nombre, contraseña } = req.body;
    Usuarios
    .updateOne({_id: id}, { $set: { nombreUsuario, nombre, contraseña }})
    .then((data) => res.send('Usuario Actualizado Correctamente'))
    .catch((error) => res.json({ message:error }));
});

// eliminar usuario
router.delete('/eliminar_usuario/:id', (req,res) => {
    const {id} = req.params;
    Usuarios
    .deleteOne({_id: id})
    .then((data) => res.send('Usuario Eliminado Correctamente'))
    .catch((error) => res.json({ message:error }));

});

module.exports = router;
const express = require('express');
const Productos = require('../models/productos');


const router = express.Router();

// crear producto
router.post('/crear_producto', (req,res) => {
    const { nombre, tipo, precio } = req.body;
    const fecha_producto = new Date();
    const producto = new Productos ({
        nombre:nombre, 
        tipo:tipo,
        precio:precio,
        fecha_producto:fecha_producto
    });
    producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener productos
router.get('/productos', (req, res) => {
    Productos
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }));
});

// obtener producto por id 
router.get('/productos/:id', (req,res) => {
    const {id} = req.params;
    Productos
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }));
});

// obtener producto por nombre de usuario
router.get('/productos/:nombre', (req,res) => {
    const nombre = req.params.nombre;
    Productos
    .findOne({nombre: nombre})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }));
});

// actualizar producto
router.put('/actualizar_producto/:id', (req,res) => {
    const {id} = req.params;
    const { nombre, tipo, precio } = req.body;
    Productos
    .updateOne({_id: id}, { $set: { nombre, tipo, precio }})
    .then((data) => res.send('Producto Actualizado Correctamente'))
    .catch((error) => res.json({ message:error }));
});

// eliminar producto
router.delete('/eliminar_producto/:id', (req,res) => {
    const {id} = req.params;
    Productos
    .deleteOne({_id:id})
    .then((data) => res.send('Producto Eliminado Correctamente'))
    .catch((error) => res.json({ message:error }));
});

module.exports = router;
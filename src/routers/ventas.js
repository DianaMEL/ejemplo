const express = require('express');
const Ventas = require('../models/ventas');

const router = express.Router();

// crear venta 
router.post('/crear_venta', (req,res) => {
    const { productos, total } = req.body;
    const fecha_venta = new Date();
    const venta = new Ventas ({
        productos:productos,
        total:total,
        fecha_venta:fecha_venta
    });
    venta
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }));
});

// obtener ventas
router.get('/ventas', (req, res) => {
    Ventas
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }));
});

// obtener venta por id 
router.get('/ventas/:id', (req, res) => {
    const {id} = req.params;
    Ventas
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }));
});

// actualizar venta 
router.put('/actualizar_venta/:id', (req,res) => {
    const {id} = req.params;
    const { productos, total } = req.body;
    Ventas
    .updateOne({_id: id}, { $set: { productos, total }})
    .then((data) => res.send('Venta Actualizada Correctamente'))
    .catch((error) => res.json({ message:error }));
});

// eliminar venta 
router.delete('/eliminar_venta/:id', (req,res) => {
    const {id} = req.params;
    Ventas
    .deleteOne({_id:id})
    .then((data) => res.send('Venta Eliminada Correctamente'))
    .catch((error) => res.json({ message:error }));
});

module.exports = router;
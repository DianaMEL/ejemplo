const express = require('express');
const Ingresos = require('../models/ingresos');

const router = express.Router();

// crear ingresos 
router.post('/crear_ingreso', (req,res) => {
    const { cantidad } = req.body;
    const fecha_ingreso = new Date();
    const ingreso = new Ingresos ({
        cantidad:cantidad, 
        fecha_ingreso:fecha_ingreso
    });
    ingreso
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener ingresos
router.get('/ingresos', (req,res) => {
    Ingresos
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }));
});

// obtener ingreso por id 
router.get('/ingresos/:id', (req,res) => {
    const {id} = req.params;
    Ingresos
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }));
});

// actualizar ingreso 
router.put('/actualizar_ingreso/:id', (req, res) => {
    const {id} = req.params;
    const {cantidad} = req.body;
    Ingresos
    .updateOne({_id: id}, { $set: { cantidad }})
    .then((data) => res.send('Egreso Actualizado Correctamente'))
    .catch((error) => res.json({ message:error }));
});

// eliminar ingreso
router.delete('/eliminar_ingreso/:id', (req,res) => {
    const {id} = req.params;
    Ingresos
    .deleteOne({_id:id})
    .then((data) => res.send('Ingreso Eliminado Correctamente'))
    .catch((error) => res.json({ message:error }));
});

module.exports = router;
const express = require('express');
const Egresos = require('../models/egresos');


const router = express.Router();

// crear egreso
router.post('/crear_egreso', (req, res) => {
    const { idUsuario, cantidad } = req.body;
    const fecha_egreso = new Date();
    const egreso = new Egresos ({
        idUsuario:idUsuario, 
        cantidad:cantidad,
        fecha_egreso:fecha_egreso
    });
    egreso
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// obtener egresos
router.get('/egresos', (req, res) => {
    Egresos
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }));
});

// obtener egreso por id
router.get('/egresos/:id', (req,res) => {
    const {id} = req.params;
    Egresos
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }));
});

// actualizar egreso 
router.put('/actualizar_egreso/:id', (req, res) => {
    const {id} = req.params;
    const {idUsuario, cantidad} = req.body;
    Egresos
    .updateOne({_id: id}, { $set: { idUsuario, cantidad }})
    .then((data) => res.send('Egreso Actualizado Correctamente'))
    .catch((error) => res.json({ message:error }));
});

// eliminar egreso 
router.delete('/eliminar_egreso/:id', (req, res) => {
    const {id} = req.params;
    Egresos
    .deleteOne({_id: id})
    .then((data) => res.send('Egreso Eliminado Correctamente'))
    .catch((error) => res.json({ message:error }));
});

module.exports = router;
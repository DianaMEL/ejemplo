const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const usuarios = require('./routers/usuarios');
const egresos = require('./routers/egresos');
const productos = require('./routers/productos');
const ventas = require('./routers/ventas');
const ingresos = require('./routers/ingresos');


const app = express();
const port = process.env.PORT || 3000;

// routes 
app.get('/', (req, res) => {
    res.send('welcome');
});

app.use(express.json());
app.use('/api', usuarios);
app.use('/api', egresos);
app.use('/api', productos);
app.use('/api', ventas);
app.use('/api', ingresos);


// conexion a base de datos
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("conectado a mongo"))
.catch((error) => console.error(error)); 

app.listen(port, () => console.log('servidor en el puerto',port));
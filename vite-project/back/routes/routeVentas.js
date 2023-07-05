const express = require('express');
const Ventas = require('../controllers/controllerVentas');
const routerVentas = express.Router();

//Vendedor
routerVentas.get('/', Ventas.mostrar);
routerVentas.post('/create', Ventas.crear);
routerVentas.put('/update/:id', Ventas.editar);
routerVentas.delete('/delete/:id', Ventas.borrar);

module.exports = routerVentas;
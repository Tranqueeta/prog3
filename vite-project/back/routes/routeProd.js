const express = require('express');
const Productos = require('../controllers/controllerProd');
const routerProd = express.Router();

//Proveedor
routerProd.get('/', Productos.mostrar);
routerProd.post('/create', Productos.crear);
routerProd.put('/update/:id', Productos.editar);
routerProd.delete('/delete/:id', Productos.borrar);

module.exports =  routerProd;
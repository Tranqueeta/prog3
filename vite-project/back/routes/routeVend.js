const express = require('express');
const Vendedor = require('../controllers/controllerVend');
const routerVend = express.Router();

//Vendedor
routerVend.get('/', Vendedor.mostrar);
routerVend.post('/create', Vendedor.crear);
routerVend.put('/update/:id', Vendedor.editar);
routerVend.delete('/delete/:id', Vendedor.borrar);

module.exports = routerVend;
const express = require('express');
const Cliente = require('../controllers/controllerCliente');
const routerCliente = express.Router();

//Vendedor
routerCliente.get('/', Cliente.mostrar);
routerCliente.post('/create', Cliente.crear);
routerCliente.put('/update/:id', Cliente.editar);
routerCliente.delete('/delete/:id', Cliente.borrar);

module.exports = routerCliente;
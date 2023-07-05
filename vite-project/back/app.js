const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
const routerProd = require('./routes/routeProd');
const routerVend = require('./routes/routeVend');
const routerCliente = require('./routes/routeCliente');
const routerVentas = require('./routes/routeVentas');

app.use(cors());
app.use(express.json());
app.use('/productos', routerProd);
app.use('/vendedor', routerVend);
app.use('/cliente', routerCliente);
app.use('/ventas', routerVentas);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

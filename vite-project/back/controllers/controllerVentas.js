const connection = require('../database/db');
const Ventas = {};

Ventas.mostrar = ('/', (req, res) => {
    connection.query('CALL SP_mostrarVentas()', (error, results) => {
        if(error) throw error;

        if(results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay datos');
        }
    })
});

Ventas.crear = ('/create', (req, res) => {
    const command = 'INSERT INTO ventas SET ?';
    const ventasObj = {
        fechaVenta: req.body.fechaVenta,
        Precio: req.body.Precio,
        idVendedor: req.body.idVendedor,
        idCliente: req.body.idCliente,
        idProductos: req.body.idProductos
    };

    connection.query(command, [ventasObj], (error, results) => {
        if(error) throw error;
        res.send(results);
    });
});

Ventas.editar = ('/update/:id', (req, res) => {
    const id = req.params.id;
    const ventasObj = {
        fechaVenta: req.body.fechaVenta,
        Precio: req.body.Precio,
        idVendedor: req.body.idVendedor,
        idCliente: req.body.idCliente,
        idProductos: req.body.idProductos
    };
    const command = 'UPDATE ventas SET ? WHERE id= ?';

    connection.query(command, [ventasObj, id], (error, results) => {
        if(error) throw error;

        if(results.affectedRows !== 1) {
            res.send('Id no valido');
        } else {
            res.send('Venta editada');
        }
    });
});

Ventas.borrar = ('/delete/:id', (req, res) => {
    const id = req.params.id;
    const command = 'DELETE FROM ventas WHERE id = ?';
    connection.query(command, [id], (error, results) => {
        if(error) throw error;

        if(results.affectedRows !== 1) {
            res.send('Id no valido');
        } else {
            res.send('Venta borrada');
        }
    });
});

module.exports = Ventas;
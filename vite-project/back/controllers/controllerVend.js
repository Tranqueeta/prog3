const connection = require('../database/db');
const Vendedor = {};

Vendedor.mostrar = ('/', (req, res) => {
    connection.query('SELECT * FROM vendedor', (error, results) => {
        if(error) throw error;

        if(results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay datos');
        }
    })
});

Vendedor.crear = ('/create', (req, res) => {
    const command = 'INSERT INTO vendedor SET ?';
    const vendedorObj = {
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido
    };

    connection.query(command, [vendedorObj], (error, results) => {
        if(error) throw error;
        res.send(results);
    });
});

Vendedor.editar = ('/update/:id', (req, res) => {
    const id = req.params.id;
    const vendedorObj = {
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido
    };
    const command = 'UPDATE vendedor SET ? WHERE id= ?';

    connection.query(command, [vendedorObj, id], (error, results) => {
        if(error) throw error;

        if(results.affectedRows !== 1) {
            res.send('Id no valido');
        } else {
            res.send('Vendedor editado');
        }
    });
});

Vendedor.borrar = ('/delete/:id', (req, res) => {
    const id = req.params.id;
    const command = 'DELETE FROM vendedor WHERE id = ?';
    connection.query(command, [id], (error, results) => {
        if(error) throw error;

        if(results.affectedRows !== 1) {
            res.send('Id no valido');
        } else {
            res.send('Vendedor borrado');
        }
    });
});

module.exports = Vendedor;
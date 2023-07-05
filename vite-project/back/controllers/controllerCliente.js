const connection = require('../database/db');
const Cliente = {};

Cliente.mostrar = ('/', (req, res) => {
    const command = 'SELECT * FROM cliente';

    connection.query(command, (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay datos');
        }

    });
});

Cliente.crear = ('/create', (req, res) => {
    const command = 'INSERT INTO cliente SET ?';
    const clienteObj = {
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        dni: req.body.dni
    };

    connection.query(command, [clienteObj], (error, results) => {
        if(error) throw error;
        res.send(results);
    });
    
  
    
});

Cliente.editar = ('/update/:id', (req, res) => {
    const id = req.params.id;
    const clienteObj = {
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        dni: req.body.dni
    };
    
    const command = 'UPDATE cliente SET ? WHERE id = ?';
    

    connection.query(command, [clienteObj, id], (error, results) => {
        if(error) throw error;

        if (results.affectedRows !== 1) {
            res.send('Id no válido');
        } else {
            res.send('Cliente editado');
        }
        
        
    });
    
});

Cliente.borrar = ('/delete/:id', (req, res) => {
    const id = req.params.id;
    const command = 'DELETE FROM cliente WHERE id= ?';
  
    connection.query(command, [id], (error, results) => {
        if (error) throw error;

        if (results.affectedRows !== 1) {
            res.send('Id no válido');
        } else {
            res.send('Cliente borrado');
        }
    });
    
});
  
module.exports = Cliente;
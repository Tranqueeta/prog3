const connection = require('../database/db');
const Productos = {};

Productos.mostrar = ('/', (req, res) => {
    const command = 'SELECT * FROM PRODUCTO';

    connection.query(command, (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay datos');
        }

    });
});

Productos.crear = ('/create', (req, res) => {
    const command = 'INSERT INTO PRODUCTO SET ?';
    const productosObj = {
        
        NombreProducto: req.body.NombreProducto,
        stock: req.body.stock,
        precio: req.body.precio,
        origen: req.body.origen,
        id_provedor: req.body.id_provedor,
        id_tipo_producto: req.body.id_tipo_producto,
        id_marca: req.body.id_marca
    };

    connection.query(command, [productosObj], (error, results) => {
        if(error) throw error;
        res.send(results);
    });
    
  
    
});

Productos.editar = ('/update/:id', (req, res) => {
    const id = req.params.id;
    const productosObj = {
        NombreProducto: req.body.NombreProducto,
        stock: req.body.stock,
        precio: req.body.precio,
        origen: req.body.origen,
        id_provedor: req.body.id_provedor,
        id_tipo_producto: req.body.id_tipo_producto,
        id_marca: req.body.id_marca
    };
    
    const command = 'UPDATE PRODUCTO SET ? WHERE ID_PRODUCTO = ?';
    

    connection.query(command, [productosObj, id], (error, results) => {
        if(error) throw error;

        if (results.affectedRows !== 1) {
            res.send('Id no válido');
        } else {
            res.send('Producto editado');
        }
        
        
    });
    
});

Productos.borrar = ('/delete/:id', (req, res) => {
    const id = req.params.id;
    const command = 'DELETE FROM PRODUCTO WHERE ID_PRODUCTO= ?';
  
    connection.query(command, [id], (error, results) => {
        if (error) throw error;

        if (results.affectedRows !== 1) {
            res.send('Id no válido');
        } else {
            res.send('Producto borrado');
        }
    });
    
});
  
module.exports = Productos;


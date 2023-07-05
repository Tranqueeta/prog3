const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'APP'
});

connection.connect((error) => {
    if (error) {
        console.log(`El error de conexion es: ${error}`);
        return
    }
    console.log('Conectado a la DB MySQL');
});

module.exports = connection;
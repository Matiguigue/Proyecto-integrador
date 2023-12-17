const mysql = require('mysql2');

const pool = mysql.createPool({
    user: 'root',
    password: 'mati2506',
    host: 'localhost',
    port: '3306',
    database: 'funko_schema',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
});

pool.getConnection((err, conn) => {
    if (err) {
        console.log('Hubo un error al conectarse a la DB: ' + err);
    }
    else {
        console.log('Conexion a la Base de datos exitosa');
        conn.release();
    }
});

module.exports = {
    conn: pool.promise()
};


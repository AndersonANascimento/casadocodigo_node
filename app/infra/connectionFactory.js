var mysql = require('mysql');

function createDBConnection () {
    console.log('Conectando ao BD...');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'casadocodigo'
    });
};

// Função Wrapper
module.exports = function () {
    return createDBConnection;
};

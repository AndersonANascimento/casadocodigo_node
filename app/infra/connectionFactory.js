var mysql = require('mysql');

function createDBConnection () {
    //console.log('Conectando ao BD...');
    var env = process.env.NODE_ENV || 'development';
    if (env == 'development') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'casadocodigo'
        });
    } else {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'casadocodigo_test'
        });
    }
};

// Função Wrapper
module.exports = function () {
    return createDBConnection;
};

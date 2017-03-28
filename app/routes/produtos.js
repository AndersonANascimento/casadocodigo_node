module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        console.log("Listando produtos...");
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'casadocodigo'
        });
        // consulta
        connection.query('SELECT * FROM produto', function(err, results) {
            //res.send(results);
            res.render('produtos/lista', {lista: results});
        });
        connection.end();
    });
};

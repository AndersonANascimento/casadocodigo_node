var connectionFactory = require('../infra/connectionFactory');

module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        console.log("Listando produtos...");
        var connection = connectionFactory();
        // consulta
        connection.query('SELECT * FROM produtos', function(err, results) {
            //res.send(results);
            res.render('produtos/lista', {lista: results});
        });
        connection.end();
    });

    app.get('/detalhe', function(req, res){

    });
};

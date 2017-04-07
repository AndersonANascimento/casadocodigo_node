module.exports = function (app) {
    app.get('/', function (req, res) {
        var connection = app.infra.connectionFactory();
        var produtos = new app.infra.ProdutosDAO(connection);
        produtos.lista(function (err, results) {
            if (err) {
                return next(err);
            }
            res.format({
                html: function () {
                    res.render('home/index', {livros: results});
                },
                json: function () {
                    res.json(results);
                }
            });
        });
        connection.end();
    });
};

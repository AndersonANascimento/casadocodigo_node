module.exports = function (app) {
    app.get('/promocoes/form', function (req, res, next) {
        var connection = app.infra.connectionFactory();
        var produtos = new app.infra.ProdutosDAO(connection);
        produtos.lista(function (err, results) {
            if (err) {
                return next(err);
            }
            res.render('promocoes/form', {livros: results});
        });
        connection.end();
    });

    app.post('/promocoes', function (req, res) {
        var promocao = req.body;
        console.log(promocao);
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('promocoes/form');
    });
};

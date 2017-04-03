module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        var connection = app.infra.connectionFactory();
        var produtos = new app.infra.ProdutosDAO(connection);
        produtos.lista(function (err, results) {
            res.format({
                html: function() {
                    res.render('produtos/lista', {lista: results});
                },
                json: function() {
                    res.json(results);
                }
            });
        });
        connection.end();
    });

    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form');
    });

    app.post('/produtos', function (req, res) {
        var produto = req.body;
        console.log(produto);
        
        var connection = app.infra.connectionFactory();
        var produtos = new app.infra.ProdutosDAO(connection);
        produtos.salva(produto, function (err, results) {
            console.log(err);
            res.redirect('/produtos');
        });
    });

    //app.get('/produtos/detalhe', function (req, res) {
    //    var connection = app.infra.connectionFactory();
    //    var produtosBanco = app.infra.produtosBanco(connection);
    //    // consulta
    //    produtosBanco.detalhe(id, function(err, results) {
    //        //res.send(results);
    //        console.log("Listando produtos...");
    //        res.render('produtos/lista', {lista: results});
    //    });
    //    connection.end();
    //});

    app.get('/produtos/remove', function (req, res) {
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco(connection);
        var produto = produtosBanco.carrega(id, callback);
        if (produto) {
            produtosBanco.remove(connection, produto, callback);
        }

    });
};

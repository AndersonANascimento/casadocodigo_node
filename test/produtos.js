var express = require('../config/express')();
var request = require('supertest')(express);

describe('ProdutosController', function () {

    beforeEach(function(done){
        /* TODO: pesquisar sobre a biblioteca (node-database-cleaner) */
        var conn = express.infra.connectionFactory();
        conn.query('DELETE FROM produtos', function(err, results) {
            if(!err) {
                done();
            }
        });
    });

    it('#listagem json', function (done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            //.expect('Content-Type',/json/)
            .expect(200, done);
    });
    it('#cadastro de novo produto com dados inválidos', function (done) {
        request.post('/produtos')
            .send({titulo: '', descricao: 'novo livro'})
            .expect(400, done);
    });
    it('#cadastro de novo produto com dados válidos', function (done) {
        request.post('/produtos')
            .send({titulo: 'Teste', descricao: 'novo livro', preco: 20.50})
            .expect(302, done);
    });
});
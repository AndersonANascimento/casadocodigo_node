var app = require('express')();
var load = require('express-load');

app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = function () {
    return app;
};

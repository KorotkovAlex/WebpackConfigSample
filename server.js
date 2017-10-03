var express = require('express');
var app = express();
var engines = require('consolidate');
var http = require('http');

// Указываем статические файлы для сервера
app.use('/',express.static('./dist'));
// Указываем где view 
app.set('views', __dirname + '/dist');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('*', function (req, res) {
    res.render('index.html');
});

http.createServer(app).listen(7000, function () {
    console.log('server run http://localhost:7000');
});
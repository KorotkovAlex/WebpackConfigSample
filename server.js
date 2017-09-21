var express = require('express');
var app = express();
var engines = require('consolidate');
var http = require('http');


app.use('/dist',express.static('./dist'));
var engines = require('consolidate');
app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('*', function (req, res) {
    res.render('index.html');
});

http.createServer(app).listen(7000, function () {});
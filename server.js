/**
 * Created by Виталий on 05.09.2016.
 */
// берём Express
var express = require('express');

// создаём Express-приложение
var app = express();
app.use(express.static(__dirname + '/Fronttend'));

app.use(function(req, res, next) {
    res.status(404).sendfile('Fronttend/Error404.html');
});


app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.listen(8084);

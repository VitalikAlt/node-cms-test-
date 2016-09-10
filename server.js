/**
 * Created by Виталий on 07.09.2016.
 */
var express = require('express'),
    app = express(),
    path = require('path')
    body = require('body-parser');

app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use(express.static(path.join(__dirname + '/public/static')));

// ------------------------Осторожно он не смотрит на регистр букв
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public' + '/index.html');
});
app.get('/s', function(req, res) {
    res.sendFile(__dirname + '/public' + '/main-page.html');
});

app.get('/angular', function(req, res) {
    res.sendFile(__dirname + '/public' + '/Angular.html')
})

app.get('/vue', function(req, res) {
    res.sendFile(__dirname + '/public' + '/vue.html')
})

app.get('/aaa', function(req, res) {
    res.status(200).send('aaa');
})

//пример обработки запросов с параметрами get - для безопастных post - для не безопастных
app.get('/gg', function(req, res) {
    console.log(req.query);
    res.status(200).send('hay');
});

app.post('/ggs', function(req, res) {
    var data = req.query;
    console.log(data);
    res.status(200).send('hay');
});
// ------------------------------------------

// обработка 404 ошибки
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public' + '/Error404.html');
});
app.listen(8084);
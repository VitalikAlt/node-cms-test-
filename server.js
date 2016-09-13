/**
 * Created by Виталий on 07.09.2016.
 */
var express = require('express');
var app = express();
var path = require('path');
var body = require('body-parser');
var first_API = require('./libs/first_API');

var upload = require('jquery-file-upload-middleware');

upload.configure({
    uploadDir: __dirname + '/public/uploads',
    uploadUrl: '/uploads',
    imageVersions: {
        thumbnail: {
            width: 80,
            height: 80
        }
    }
});

app.use('/upload', upload.fileHandler('/s'));
app.use(body.urlencoded({ extended: false }));
app.use(body.json());
app.use(express.static(path.join(__dirname + '/public/static')));

// 9999999999999999999999999 Node router 99999999999999999999999999999999999999999999
app.get('/user:id', function (req, res, next) {
    res.send(req.params.id);
});
//99999999999999999999999999999999999999999999999999999999999999999999999999999999999

//======================= Work with mongodb ===================================
app.get('/api/articles', function(req, res) {
    first_API.getTableList(function(data) {
        res.send(data);
    });
});

app.post('/api/articles', function(req, res) {
    first_API.addData(req.query, function(data) {
        res.send(data);
    });
});

app.get('/api/articles/:id', function(req, res) {
    first_API.getElementById(req.params.id, function (data) {
        res.send(data);
    }, function (data) {
        res.send(data);
    });
});
//==========================================================================

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
    res.status(200).send('Hello Sveta');
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
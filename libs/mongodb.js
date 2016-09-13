/**
 * Created by Виталий on 13.09.2016.
 */
/**
 * Это модель таблицы БД
 */
var mongoose    = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test1');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error:', err.message);
});
db.once('open', function callback () {
    console.log("Connected to DB!");
});

var Schema = mongoose.Schema;

var Article = new Schema({
    title: { type: String, required: true },
    modified: { type: Date, default: Date.now }
});

var ArticleModel = mongoose.model('Article', Article);

module.exports.ArticleModel = ArticleModel;
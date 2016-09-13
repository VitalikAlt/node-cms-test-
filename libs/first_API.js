/**
 * Created by Виталий on 13.09.2016.
 */
/**
 *   Это запросы к базе данных
 */
var ArticleModel = require('./mongodb').ArticleModel;

var getTableList = function(callback, err) {
    return ArticleModel.find(function (err, data) {
        if (!err) {
            return callback(data);
        } else {
            return err(500);
        }
    });
};

var addData = function(aData, callback, err) {
    
    var article = new ArticleModel({
        title: aData.title
    });

    article.save(function (err) {
        if (!err) {
            console.log("article created");
            return callback(article);
        } else {
            console.log(err);
            if(err.name == 'ValidationError') {
                return err(400);
            } else {
                return err(500);
            }
            console.log('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
};

var getElementById = function(aId, callback, err) {
    return ArticleModel.findById(aId, function (err, article) {
        if(!article) {
            return err(404);
        }
        if (!err) {
            return callback(article);
        } else {
            return err(500);
        }
    });
};

module.exports.getTableList = getTableList;
module.exports.addData = addData;
module.exports.getElementById = getElementById;
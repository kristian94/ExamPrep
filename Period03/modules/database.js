var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/joke';

var _db;

process.on('SIGINT', function () {
    MongoClient.close(function () {
        console.log('Mongo disconnected on app termination');
        process.exit(0);
    });
});

module.exports = {

    connectToServer: function (callback) {
        MongoClient.connect(url, function (err, db) {
            _db = db;
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    }
};
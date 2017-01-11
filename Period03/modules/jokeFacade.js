var assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
var database = require('./database');

exports.clearCollection = function(){
    var db = database.getDb()
    db.collection('jokes').remove()
}

exports.insertMockJokes = function () {
    var jokes = require('./jokes').jokes
    console.log(jokes)
    var db = database.getDb()
    jokes.forEach(function (element, index) {
        var collection = db.collection('jokes')
        collection.insertOne(element, function (err, result) {
            if (err) {
                console.error(err)
            } else {
                console.log('joke inserted!')
            }
        })
    })
}



exports.allJokes = function (callback) {
    var db = database.getDb()
    var collection = db.collection('jokes')
    collection.find({}).toArray(function (err, jokes) {
        callback(err, jokes);
    })

};
exports.findJoke = function (id, callback) {
    var db = database.getDb()
    console.log(`finding joke with id: ${id}`)
    var collection = db.collection('jokes')
    collection.find({_id: ObjectId(id)}, function(err, cursor){
        if(err){
            callback(err)
        }else{
            cursor.toArray(function(err, documents){
                if(documents.length == 1 && documents[0]){
                    callback(err, documents[0])
                }else{
                    err = new Error(`Joke with ìd: ${id} not found (or was duplicated)`)
                    callback(`Joke with ìd: ${id} not found (or was duplicated)`)
                }

            });
        }
    })


    // collection.find({'_id':o_id}, function(err, cursor){
    //
    //     db.close();
    // });
};


exports.addJoke = function (jokeToAdd, callback) {
    var db = database.getDb()
    jokeToAdd.lastEdited = new Date();
    var collection = db.collection('jokes')
    collection.insertOne(jokeToAdd, function (err, result) {
        callback(err, result);
    })
};
exports.editJoke = function (jokeToEdit, callback) {
    var db = database.getDb()
    jokeToEdit.lastEdited = new Date();
    var collection = db.collection('jokes')
    collection.updateOne({_id: jokeToEdit._id}, {
        $set: {
            joke: jokeToEdit.joke,
            type: jokeToEdit.type,
            reference: jokeToEdit.reference,
            lastEdited: new Date()
        }
    }, function (err, result) {
        callback(err, result);
        // db.close();

    })
    // })
};
exports.deleteJoke = function (id, callback) {
    var db = database.getDb()
    var collection = db.collection('jokes')
    collection.deleteOne({"_id": ObjectId(id)}, function (err, result) {
        callback(err, result)
    })
};
exports.randomJoke = function randomJoke(callback) {
    var collection = db.collection('jokes')
    collection.find({}).toArray(function (err, jokes) {
        var l = jokes.length;
        var i = Math.floor(Math.random() * l);
        var joke = jokes[i];
        callback(err, joke);
    })
};
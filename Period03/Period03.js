module.exports = function (callback) {
    require('./modules/database').connectToServer(function () {
        var express = require('express');
        var path = require('path');
        var favicon = require('serve-favicon');
        var logger = require('morgan');
        var cookieParser = require('cookie-parser');
        var bodyParser = require('body-parser');
        var jokeFacade = require('./modules/jokeFacade');

        var app = express();

        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'jade');

        app.use(logger('dev'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, 'public')));

        app.get('/api/joke/random', function (req, res) {
            jokeFacade.randomJoke(function (err, joke) {
                if (err) {
                    res.write(err);

                } else {
                    res.write(JSON.stringify(joke));
                }
                res.end();
            })

        });
        app.get('/api/jokes', function (req, res) {
            jokeFacade.allJokes(function (err, jokes) {
                if (err) {
                    res.write(err);
                } else {
                    res.write(JSON.stringify(jokes));
                }
                res.end();
            })
        });
        app.get('/api/joke/:_id', function (req, res) {
            var id = req.params._id;
            jokeFacade.findJoke(id, function (err, joke) {
                if (err) {
                    res.status(400).write(err)
                } else {
                    console.log(joke)
                    res.write(JSON.stringify(joke))
                }
                res.end()
            })
        })


        app.post('/api/joke', function (req, res) {
            var jokeIn = req.body;
            jokeFacade.addJoke(jokeIn, function (err, joke) {
                if (err) {
                    res.write(err);

                } else {
                    res.write(JSON.stringify(joke));
                }
                res.end();
            })
        });
        app.put('/api/joke', function (req, res) {
            jokeFacade.editJoke(function (err, joke) {
                if (err) {
                    res.write(err);

                } else {
                    res.write(JSON.stringify(joke));
                }
                res.end();
            })
        });
        app.delete('/api/joke/:_id', function (req, res) {
            var id = req.params._id;
            jokeFacade.deleteJoke(id, function (err, joke) {
                if (err) {
                    res.write(err);

                } else {
                    res.write(JSON.stringify(joke));
                }
                res.end();
            })
        });

        jokeFacade.allJokes(function (err, result) {
            if (result.length > 0) {
                jokeFacade.clearCollection()
            }
            jokeFacade.insertMockJokes()

        });

        callback(app)
    })
}

/**
 * Created by Kristian Nielsen on 09-01-2017.
 */
module.exports = function () {
    var app = require('express')()
    var path = require('path')
    var bodyParser = require('body-parser')
    var userModule = require('./modules/userModule')

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(bodyParser())

    // authorization
    app.use(function (req, res, next) {
        let user = {
            username: req.body.username,
            password: req.body.password
        }
        if (userModule.authorize(user)) {
            next()
        } else {
            let err = {
                code: 401,
                error: 'authorization failed'
            }
            next(err)
        }
    })

    // error handling
    app.use(function (err, req, res, next) {
        if (err) {
            console.error(err.stack || err.error || err)
            res.status(err.status || 500).send({error: err})
        } else {
            next()
        }
    })

    app.post('/api/welcome', function (req, res) {
        res.send('Welcome to the members only area!')
    })

    app.listen(3000)
}

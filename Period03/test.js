/**
 * Created by Kristian Nielsen on 10-01-2017.
 */
var chai = require('chai')
var request = require('request')
var assert = chai.assert
var expect = chai.expect
var should = chai.should()
var nock = require('nock')
var jokeApi = nock('http://localhost:1337')
var jokes = require('./modules/jokes').jokes
var jokeFacade = require('./modules/jokeFacade')
require('./Period03')(function (app) {
    describe('joke api', function () {
        it('should return a joke by id, or code 400', function (done) {
            let expectedJoke = jokes[0]
            let id = 1234

            jokeApi.get(`/api/joke/${id}`)
                .reply(200, {
                    joke: expectedJoke
                })


        })
    })
})



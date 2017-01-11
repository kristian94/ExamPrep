/**
 * Created by Kristian Nielsen on 10-01-2017.
 */
var chai = require('chai')
var request = require('request')
var assert = chai.assert
var expect = chai.expect
var should = chai.should() // prototyping?

var getNumber = function(){
    return 5
}

describe('syntax test', function(){
    it('should check if getNumber returns the number 5', function(){
        let number = getNumber() // returns 5

        // forskellige syntaxe
        number.should.be.a('number')
        expect(number).to.be.a('number')
        assert.typeOf(number, 'number')

        number.should.equal(5)
        expect(number).to.equal(5)
        assert.equal(number, 5)
    })
})

describe('authorization', function(){

    let options = {
        method: 'POST',
        uri: 'http://localhost:3000/api/welcome',
        json: true
    }

    it('should return error with code: 401', function(done){
        request(options, function(err, response, body){
            expect(response.body.error.code).to.be.a('number')
            expect(response.body.error.code).to.equal(401)
            done()
        })
    })
    it('should return code 500 and \"Welcome to the members only area!\"', function(done){
        options.body = {
            username: 'jack',
            password: '1234'
        }
        request(options, function(err, response, body){
            assert.equal(body.error, null)
            body.should.be.equal('Welcome to the members only area!')
            done()
        })
    })
})
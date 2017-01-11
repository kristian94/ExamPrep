/**
 * Created by Kristian Nielsen on 09-01-2017.
 */
module.exports = function(){
    var outer = 'you can always access me'

    var closure = function(){
        var inner = 'hello from closure'
        console.log(`printing from closure: ${outer}`)
        outer = 'changed'
    }
    closure()

    console.log(`printing from outer scope: ${outer}`)

    console.log(inner)
}
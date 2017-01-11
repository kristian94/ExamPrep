/**
 * Created by Kristian Nielsen on 09-01-2017.
 */
module.exports = function(){

    let x = 1;

    // let x = 1

    (function(){
        let y = 10
        let z = 100
        x = x + y + z
    }());

    console.log(`1. ${x}`)

    new function(){
        let y = 2
        let z = 2
        x = x * y * z
    }()

    new function(number){
        let y = 2
        let z = 2
        number = number * y * z
    }(x)

    console.log(`2. ${x}`)
    
    var printInput = function(input){
        console.log(`input: ${input}`)
    }(x)

    console.log(`3. ${x}`)
    // console.log(y)
}
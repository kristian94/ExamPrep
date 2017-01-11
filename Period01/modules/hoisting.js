module.exports = function(){
    // hoistedFunction()
    // notHoistedFunction()
    // alsoNotHoistedFunction()

    hoistedVar = 10
    console.log(hoistedVar)
    console.log(anotherHoistedVar)

    var notHoistedFunction = function(){
        console.log('hello from the NOT hoisted function')
    }

    alsoNotHoistedFunction = function(){
        console.log('hello from the ALSO NOT hoisted function')
    }

    function hoistedFunction(){
        console.log('hello from the hoisted function')
    }

    var hoistedVar
    var anotherHoistedVar = 11
}
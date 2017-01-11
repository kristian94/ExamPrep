/**
 * Created by Kristian Nielsen on 09-01-2017.
 */
module.exports = function () {

    (function () {
        Array.prototype.printEveryOtherElement = function(){
            console.log('printEveryOtherElement:')
            this.forEach(function(element, index){
                if(index % 2 == 1){
                    console.log(element)
                }
            })
        }

        Object.prototype.printSelf = function(){
            console.log(this)
        }

        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        numbers.printEveryOtherElement()


    })()

    var newNumbers = [2,3,4,5,6,7,8]

    newNumbers.printEveryOtherElement()

    var animal = {
        species: 'Ferret',
        name: 'John Fitzgerald',
        age: 2
    }

    animal.printSelf()
}
module.exports = function () {

    function Person(firstName, lastName) {
        return {
            firstName: firstName,
            lastName: lastName,
            printFullName: function () {
                console.log(`Full name: ${this.firstName} ${this.lastName}`)
            }
        }
    }

    function printThis() {
        console.log(this)
    }

    var jack = Person('Jack', 'Jackson')

    jack.printThis = printThis

    jack.printFullName()
    // jack.printThis()
}

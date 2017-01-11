/**
 * Created by Kristian Nielsen on 08-01-2017.
 */
// require('./Period01/period01')()
// require('./Period02/period02')()
// require('./Period02/modules/cluster')()
var p3 = require('./Period03/Period03')
p3(function (app) {
    app.listen(1337, function (err) {
        if (err) {
            console.error(err)
        }
        console.log('listening on 1337');
    })
})



/**
 * Created by Kristian Nielsen on 09-01-2017.
 */
module.exports = function(){

    var asyncOperation = function(x, successCallback, errorCallback){
        setTimeout(function(){
            if(x == 200){
                successCallback(x)
            }else{
                errorCallback(x)
            }
        }, 2000)
    }

    asyncOperation(200, function(x){
        console.log(`success! x = ${x}`)
    }, function(x){
        console.log(`error! x = ${x}`)
    })

    console.log('hello from the bottom of the code')


}
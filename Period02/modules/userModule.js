/**
 * Created by Kristian Nielsen on 10-01-2017.
 */

let userModule = {}

let users = [
    {
        username: 'jack',
        password: '1234'
    },
    {
        username: 'mike',
        password: 'ekim1234'
    },
    {
        username: 'snoopy',
        password: '2noopy'
    },
    {
        username: 'bob123',
        password: '123bob'
    },
    {
        username: 'sarah2',
        password: 'sssss'
    }
]

userModule.authorize = function (user) {
    if(user && user.username && user.password){
        for(let i = 0; i < users.length; i++){
            let userInDb = users[i]
            if(userInDb.username == user.username &&
            userInDb.password == user.password){
                return true
            }
        }
        return false
    }else{
        return false
    }

}

module.exports = userModule

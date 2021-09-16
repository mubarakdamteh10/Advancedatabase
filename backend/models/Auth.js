const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Auth {
    constructor (username, password){
        this.username = username;
        this.password = password;
    }

    findAccount(){
        console.log(this.username, this.password ,"findAccount")
        const db = getDb();
        return db
            .collection('Users')
            .find({user_name: this.username, password: this.password})
            .next()
            .then(users => {
                // console.log(users);
                return users;
            })
            .catch(err => {
                console.log(err);
            })
    }
}

module.exports = Auth;
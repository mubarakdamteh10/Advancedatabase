const Auth = require('../models/auth');

exports.checkLogin = (req, res, next) => {
    sess = req.session;
    console.log("req body", req.body)
    const {username, password} = req.body;
    console.log("username", username, " password", password);
    const auth = new Auth(username, password);
    auth.findAccount().then((users) => {
        // console.log(users.user_name, users.password)
        if(!users){
            sess.isLogingin = false;
            console.log(sess.isLogingin);
            res.status(200).json({result: false})
        } else if(users.user_name == username && users.password == password) {
            sess.isLogingin = true;
            console.log(sess.isLogingin);
            res.status(200).json({result: true});
        }
        
    })
}

exports.logout = (req, res, next) =>{
    req.session.destroy((err) => {
        console.log("destory session")
        if(err) {
            res.status(200).json({result: false});
        }
        res.status(200).json({result: true});
    });
}
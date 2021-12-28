const mongoConnect = require('./util/database').mongoConnect;

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

// var multer = require('multer')().single();

const app = express();
app.use(session({secret: 'systemname',saveUninitialized: true,resave: true}));
var sess;

// app.use(multer);
app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
// app.use(bodyParser.json()); // application/json

const mangaData = require('./routes/Manga');
const auth = require('./routes/auth');

// fix error CORS
app.use((req, res, next) => {
    if(!sess){
        sess = req.session;
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if(sess.isLogingin){
        next();
    }
    // else if(req.url == '/login' || req.url == '/logout'){
    //         next()
    //     }
    else {
        next();
    }
});



app.use("/auth", auth.routes);
app.use("/manga", mangaData.routes);

mongoConnect(() => {
    app.listen(3001);
});
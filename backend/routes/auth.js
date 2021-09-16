const express = require('express');

const { check } = require('express-validator')
const router = express.Router();

const authController = require('../controllers/auth');

router.post('/login', authController.checkLogin);
 
router.post('/logout', authController.logout);

// router.post('/login',(req,res) => {
//     sess = req.session;
//     if(req.body.username == "admin" && req.body.password == "password"){
//       sess.isLogingin = true;
//       console.log(sess.isLogingin);
//       res.status(200).json({result: true});
//     }else{
//       sess.isLogingin = false;
//       console.log(sess.isLogingin);
//       res.status(200).json({result: false});
//     }
// });

// router.post('/logout', (req,res) => {
//     req.session.destroy((err) => {
//         if(err) {
//             res.status(200).json({result: false});
//         }
//         res.status(200).json({result: true});
//     });
// });

exports.routes = router;
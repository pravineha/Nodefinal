var express = require('express');
var router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const config = require("../config");
/* GET users listing. */
router.get('/', function(req, res, next) {
   // console.log(req)
 // res.send(`respond with a resource${req.body.email}`);
 const email = req.body.email || "swami22@gmail.com" ;
 const password = req.body.password || "swami@1988";
//  console.log("EMAIL",email);
//  console.log("EMAIL",password);
  User.findOne({ email: email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    
    // check if the password is valid
    var passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null , message:"Not valid password" });

    // if user is found and password is valid
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.cookie('authToken',token, { maxAge: 90000000, httpOnly: true });
    // return the information including token as JSON
    res.status(200).send({ auth: true, token: token });
  });
});

module.exports = router;
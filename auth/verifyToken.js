var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file
const User = require('../models/users');

function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  // var token = req.headers['x-access-token'];
  var cookies = parseCookies(req);
  // var token = cookies && cookies.authToken ?  cookies.authToken : null ;
  var token = req.headers.authorization;
   console.log("REQUEST HEADER",JSON.stringify(req.headers));
  if (!token) 
    return res.status(200).send({ data:{errorCode:403,message:"No token"}, auth: false});

  // verifies secret and checks exp
  jwt.verify(token, config.secret, function(err, decoded) {      
    if (err) 
      return res.status(200).send({data:{errorCode:500,message:"server error"}, auth: false });    

      User.findById(decoded.id, (err,user)=>{
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(200).send({data:{errorCode:403,message:"No token"}, auth: false });
        req.user = {id:user.id,role:user.role};
        next();
      })  
    // if everything is good, save to request for use in other routes
    // console.log("DECODE",decoded);

  });

}

function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}

module.exports = verifyToken;
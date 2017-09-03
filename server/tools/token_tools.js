var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config.json')
var tokenKey = process.env.TOKEN_SECRET || config.token_config;

exports.createToken = function(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, tokenKey);
};

exports.ensureAuthenticated = function(req, res, next) {
  if(!req.headers.authorization) {
    return res
    .status(403)
    .send({message: "Tu petición no tiene cabecera de autorización"});
  }
  
  var token = req.headers.authorization.split(" ")[1];
  var payload = jwt.decode(token, tokenKey);
  
  if(payload.exp <= moment().unix()) {
     return res
 	.status(401)
    .send({message: "El token ha expirado"});
  }
  req.user = payload.sub;
  next();
}
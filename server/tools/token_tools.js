let jwt = require('jwt-simple');
let moment = require('moment');
let config = require('../config.json')
let tokenKey = process.env.TOKEN_SECRET || config.token_config.TOKEN_SECRET;

exports.createToken = function(user) {
  let payload = {
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
  
  let token = req.headers.authorization;

  let payload = jwt.decode(token, tokenKey);
  
  if(payload.exp <= moment().unix()) {
     return res
 	  .status(401)
    .send({message: "El token ha expirado"});
  }
  req.user = payload.sub;
  next();
}
const jwt = require('jsonwebtoken')
const secret = require('../config/secrets')

module.exports = (req, res, next) => {
  // add code here to verify users are logged in -> check for token and validate it
  const authHeader = req.headers.authorization || '';
  const token = authHeader.split(' ')[1];

  if (token) {
    jwt.verify(token, secret.jwSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ you: 'shall not pass' })
      } else {
        req.decodedjwt = decodedToken
        next()
      }
    } )
  } else {
    res.status(401).json({ message: 'not authorized' })
  }

  next();
};

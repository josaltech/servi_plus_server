const jwt = require('jsonwebtoken');
const config = require('../../config');

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log(req.headers);
  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: 'Missing Authorization header',
    });
  }
  const token = authHeader.split(' ')[1];
  jwt.verify(token, config.auth.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: 'Invalid token',
      });
    }
    console.log(decoded);
    req.user = decoded.user;
    next();
  });
};

module.exports = verifyJWT;

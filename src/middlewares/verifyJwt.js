const jwt = require('jsonwebtoken');
const config = require('../../config');

const verifyJwt = (req, res, next) => {
  const authHeader = req.headers['authorization'];
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
    req.user = decoded.user;
    next();
  });
};

module.exports = verifyJwt;

module.exports = {
  database: {
    mongoUri: process.env.MONGO_URI_PROD,
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET_PROD,
  },
};

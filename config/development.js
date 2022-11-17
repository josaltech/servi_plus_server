module.exports = {
  database: {
    mongoUri: process.env.MONGO_URI_DEV,
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET_DEV,
  },
};

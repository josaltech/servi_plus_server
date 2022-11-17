const development = require('./development');
const production = require('./production');

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

const envs = {
  development,
  production,
};

const config = envs[NODE_ENV];

module.exports = {
  ...config,
  PORT,
  NODE_ENV,
};

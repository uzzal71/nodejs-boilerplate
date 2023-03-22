const baseConfig = require('./base');

module.exports = {
  ...baseConfig,
  server: {
    port: 3000,
  },
  database: {
    url: 'mongodb://localhost/my-dev-database',
  },
  auth: {
    secret: 'my-dev-secret-key',
  },
};
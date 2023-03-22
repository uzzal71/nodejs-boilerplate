const baseConfig = require('./base');

module.exports = {
  ...baseConfig,
  server: {
    port: 4000,
  },
  database: {
    url: 'mongodb://localhost/my-test-database',
  },
  auth: {
    secret: 'my-test-secret-key',
  },
};
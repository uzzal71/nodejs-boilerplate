const baseConfig = require('./base');

module.exports = {
  ...baseConfig,
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    url: process.env.DB_URL || 'mongodb://localhost/my-prod-database',
  },
  auth: {
    secret: process.env.AUTH_SECRET || 'my-prod-secret-key',
  },
};
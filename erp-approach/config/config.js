module.exports = {
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DB_URL || 'mongodb://localhost/my-database',
  },
  auth: {
    secret: process.env.AUTH_SECRET || 'my-secret-key',
  },
  email: {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 465,
    username: process.env.EMAIL_USERNAME || 'example@gmail.com',
    password: process.env.EMAIL_PASSWORD || 'my-email-password',
    from: process.env.EMAIL_FROM || 'example@gmail.com',
  },
};
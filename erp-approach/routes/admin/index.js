const express = require('express');
const router = express.Router();

// Middleware
router.use((req, res, next) => {
  // Check if user is authenticated
  const isAuthenticated = true; // Replace with actual authentication logic
  if (!isAuthenticated) {
    const error = new Error('Unauthorized');
    error.status = 401;
    next(error);
  } else {
    next();
  }
});

// Admin home page
router.get('/', (req, res, next) => {
  res.send('Welcome to the admin page');
});

// Admin products page
router.get('/products', (req, res, next) => {
  res.send('Welcome to the admin products page');
});

// Admin orders page
router.get('/orders', (req, res, next) => {
  res.send('Welcome to the admin orders page');
});

module.exports = router;
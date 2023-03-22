const express = require('express');
const router = express.Router();

// Customer home page
router.get('/', (req, res, next) => {
  res.send('Welcome to the customer page');
});

// Customer profile page
router.get('/profile', (req, res, next) => {
  res.send('Welcome to your profile page');
});

// Customer order history page
router.get('/orders', (req, res, next) => {
  res.send('Welcome to your order history page');
});

module.exports = router;
// routes/apiRoutes.js
const express = require('express');
const router = express.Router();

// Define a generic API welcome message route
router.get('/api', (req, res) => {
  res.json({ message: "Welcome to the API" });
});

module.exports = router;

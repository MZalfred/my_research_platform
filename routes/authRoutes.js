const express = require('express');
const router = express.Router();

// Define a route
router.get('/api', (req, res) => {
  res.json({ message: "This is your API endpoint" });
});

module.exports = router;
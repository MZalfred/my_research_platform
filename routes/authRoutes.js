const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool } = require('../db'); // Assume you've exported your pool instance from a db.js file

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);

  pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id', [username, hashedPassword], (error, results) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.status(201).send(`User added with ID: ${results.rows[0].id}`);
  });
});

// Export the router
module.exports = router;

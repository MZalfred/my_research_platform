const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock user store
let users = []; // In a real app, you'd use a database

// Utility functions
const hashPassword = password => bcrypt.hashSync(password, 10);
const authenticateUser = (username, password) => {
  const user = users.find(u => u.username === username);
  return user && bcrypt.compareSync(password, user.password);
};

// Routes
// Register User
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users.some(u => u.username === username)) {
    return res.status(400).send('Username already exists');
  }
  const hashedPassword = hashPassword(password);
  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);
  res.status(201).send('User registered');
});

// Login User
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (authenticateUser(username, password)) {
    const user = users.find(u => u.username === username);
    const token = jwt.sign({ userId: user.id }, 'YOUR_SECRET_KEY', { expiresIn: '1h' }); // Use an environment variable for the secret in production
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

module.exports = router;

const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes'); 
const animalsRoutes = require('./routes/animalsRoutes'); 
const authRoutes = require('./routes/authRoutes');
const authenticateToken = require('./middleware/authMiddleware');

app.use(express.json()); // Middleware for parsing application/json

// Use both sets of routes with the Express app
app.use('/api', apiRoutes); // Prefix all routes in apiRoutes with "/api"
app.use('/api', animalsRoutes); // Also prefix animalsRoutes to keep API routes consistent
app.use('/api/auth', authRoutes);

// Example of a protected route
app.get('/api/protected', authenticateToken, (req, res) => {
    res.send('This route is protected and you are authenticated.');
  });

// A simple route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000; // Use the environment's port if specified, otherwise use 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




const express = require('express');
const { Pool } = require('pg'); // Import Pool class from pg module
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Use the auth routes
app.use('/api/auth', authRoutes);

// Create a new pool instance and pass in your PostgreSQL connection information
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // If using SSL connection (e.g., in production with Heroku), uncomment the following line
  // ssl: { rejectUnauthorized: false }
});

// Test PostgreSQL connection
pool.connect()
  .then(() => console.log("PostgreSQL connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

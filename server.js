const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // for parsing application/json

// Define a simple route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Set the application to listen on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

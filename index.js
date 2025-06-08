const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - simplified for express 5.x
app.use(cors());
app.use(express.json()); // This replaces body-parser in express 5.x

// Test route
app.get('/', (req, res) => {
  res.send('Cash Craft Loans Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

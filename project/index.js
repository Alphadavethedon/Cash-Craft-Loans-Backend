// run `node index.js` in the termi
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Cash Craft Backend is live!');
});

// Sample route for loan application
app.post('/api/loans/apply', (req, res) => {
  const loanData = req.body;
  // TODO: Save to DB or validate
  res.json({ message: 'Loan application received', loanData });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(cors({
    origin: 'https://cashcraftapp.netlify.app', // allow your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));
// Export the app for testing or further configuration
module.exports = app;

// To run the server, use the command: node index.js
// To test the server, you can use Postman or any API testing tool to send requests to http://localhost:5000  
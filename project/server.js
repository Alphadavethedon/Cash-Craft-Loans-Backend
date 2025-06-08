const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Cash Craft MongoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    this.then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
// Define a simple schema and model
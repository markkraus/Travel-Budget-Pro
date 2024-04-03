//server

//author ben mullin

const express = require('express');
const mongoose = require('mongoose');
const Budget = require('./budgetModel'); // Adjust the path as necessary

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection URI
const uri = 'mongodb+srv://mrk133:ovlP6h4epIrWyDcq@cluster0.o58ssex.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware for parsing different request types
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.static('public'));

// Route for saving CSV data to MongoDB
app.post('/api/budgets', async (req, res) => {
    try {
      const budgetData = new Budget(req.body); // Create a new budget document
      await budgetData.save(); // Save it in the database
      res.status(201).json({ message: 'Budget data saved successfully', budgetData });
    } catch (error) {
      res.status(500).json({ message: 'Failed to save budget data', error: error.message });
    }
  });

  //additional routes
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

// author Ben Mullin
// routes.js for budget actions
const express = require('express');
const router = express.Router();
const client = require('./mongoConnect'); // Assuming mongoConnect.js exports the client

// Example route to fetch a specific budget by ID
router.get('/fetch-budget/:id', async (req, res) => {
  try {
    await client.connect();
    const db = client.db("your_db_name");
    const collection = db.collection("your_collection_name");
    // Remember to convert req.params.id to ObjectId if necessary
    const budget = await collection.findOne({ _id: req.params.id });
    
    if (!budget) {
      return res.status(404).send('Budget not found');
    }
    res.json(budget);
  } catch (error) {
    console.error('Failed to fetch budget:', error);
    res.status(500).json({ error: 'Failed to fetch budget' });
  }
  // No need to close the client after each request in this setup
});

// Additional routes can follow a similar pattern

module.exports = router;

//author ben mullin

//This file defines a Mongoose schema and model for your budget data. 
//Adjust the schema based on the structure of the data you're working with.


const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  // Example schema structure - adjust based on your actual data structure
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  description: String, // Optional field
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;

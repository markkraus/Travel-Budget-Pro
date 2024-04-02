// (Author: Ben & Connor Gramling)
// savesCSVToMango.js saves current budget to mango


const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');
const uri = "your_mongodb_connection_uri"; // Ensure this is your actual MongoDB URI
const client = new MongoClient(uri);

// Route to save budget data
router.post('/save-budget', async (req, res) => {
  try {
    await client.connect();
    const db = client.db("your_db_name");
    const collection = db.collection("your_collection_name");
    
    const result = await collection.insertOne(req.body); // Changed to insertOne if saving one budget at a time
    console.log(`${result.insertedCount} document(s) were inserted`);
    res.status(200).json({ message: 'Budget saved successfully', insertedId: result.insertedId });
  } catch (error) {
    console.error('Failed to save budget:', error);
    res.status(500).json({ error: 'Failed to save budget' });
  } finally {
    await client.close();
  }
});

// Route to fetch a specific budget by ID
router.get('/fetch-budget/:id', async (req, res) => {
  try {
    await client.connect();
    const db = client.db("your_db_name");
    const collection = db.collection("your_collection_name");
    const budget = await collection.findOne({ _id: new ObjectId(req.params.id) });
    
    if (!budget) {
      return res.status(404).send('Budget not found');
    }
    res.json(budget);
  } catch (error) {
    console.error('Failed to fetch budget:', error);
    res.status(500).json({ error: 'Failed to fetch budget' });
  } finally {
    await client.close();
  }
});

module.exports = router;





















// const fs = require('fs');
// const Papa = require('papaparse');
// const mongoose = require('mongoose');

// // Define MongoDB schema
// const csvSchema = new mongoose.Schema({
//   // Define fields based on your CSV structure
//   // For simplicity, let's assume CSV has two fields: name and age
//   expenseCategory: String,
//   currency: String, 
//   amount: Number, 
//   location: String, 
//   date: String,
//   time: String
// });

// // Define MongoDB model
// const CsvModel = mongoose.model('Csv', csvSchema);

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://mrk133:ovlP6h4epIrWyDcq@cluster0.o58ssex.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
//  { useNewUrlParser: true, useUnifiedTopology: true });

// // Function to save CSV data to MongoDB
// function saveCSVToMongo(filename) {
//   const fileData = fs.readFileSync(filename, 'utf8');
//   Papa.parse(fileData, {
//     header: true,
//     complete: (results) => {
//       const data = results.data;
//       CsvModel.insertMany(data, (err, docs) => {
//         if (err) {
//           console.error('Error saving CSV data to MongoDB:', err);
//         } else {
//           console.log('CSV data saved successfully:', docs);
//         }
//       });
//     }
//   });
// }

// /* // Usage: Call saveCSVToMongo for each CSV file you want to save
// saveCSVToMongo('file1.csv');
// saveCSVToMongo('file2.csv');
// // Add more calls as needed for additional files */
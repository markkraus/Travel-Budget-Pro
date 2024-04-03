//server

//author ben mullin

const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection URI
const uri = 'mongodb+srv://mrk133:ovlP6h4epIrWyDcq@cluster0.o58ssex.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' directory

// Connect to MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Route for saving CSV data to MongoDB
app.post('/api/saveCSVToMongo', async (req, res) => {
    try {
        const db = client.db('User'); // Replace with your actual database name
        const collection = db.collection('Budgets'); // Replace with your actual collection name
        

        // The CSV data needs to be parsed into JSON before inserting into MongoDB
        // The parsing logic depends on the structure of your CSV and how you want to store the data
     
        // Directly inserting CSV string into MongoDB for simplicity (not typical usage)
        const result = await collection.insertOne(req.body);
        
        res.status(200).json({ success: true, message: 'CSV data saved successfully', id: result.insertedId });
    } catch (error) {
        console.error('Error saving CSV data:', error);
        res.status(500).json({ success: false, message: 'Failed to save CSV data' });
    }
});

// Start the server after connecting to MongoDB
connectToMongoDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch((error) => {
    console.error('Failed to start server:', error);
});

const { MongoClient } = require('mongodb');
const uri = "your_mongodb_connection_uri"; // Adjust this

// Function to connect to MongoDB
async function connectDB() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        return client.db("your_database_name"); // Adjust database name
    } catch (err) {
        console.error("Error connecting to database:", err);
        throw err;
    }
}

// Controller functions
module.exports = {
    async getBudget(req, res) {
        try {
            const db = await connectDB();
            const budget = await db.collection('budget').find().toArray();
            res.json(budget);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    async createBudget(req, res) {
        try {
            const db = await connectDB();
            const result = await db.collection('budget').insertOne(req.body);
            res.json(result.ops[0]);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    async updateBudget(req, res) {
        try {
            const db = await connectDB();
            const result = await db.collection('budget').updateOne(
                { _id: req.params.id },
                { $set: req.body }
            );
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    async deleteBudget(req, res) {
        try {
            const db = await connectDB();
            const result = await db.collection('budget').deleteOne({ _id: req.params.id });
            res.json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

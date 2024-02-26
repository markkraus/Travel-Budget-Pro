/* Created by Mark Kraus.
 * 
 * Connects to the MongoDB Database that is running locally. 
 * - Uses Node.js Driver to connect.
 */

const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017/?directConnection=true';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

// Connect to the MongoDB server
async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();
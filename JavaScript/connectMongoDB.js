/* Created by Mark Kraus.
 * 
 * Connects to the MongoDB Database that is running locally. 
 * - Uses Node.js Driver to connect.
 * 
 * To connect: 
 * 1. cd ../Javascript
 * 2. node connectMongoDb.js
 */

const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017/?directConnection=true';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

// Connect to the MongoDB server
async function connectToDatabase() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');

    // Get reference to the database
    const database = client.db('UserRegistrationInfo');

    // Get reference to the collection
    const collection = database.collection('Users');

    // Perform database operations
    // Insert a document
    const result = await collection.insertOne({ username: 'example', password: 'password123', email: 'example@example.com' });
    console.log(`${result.insertedCount} document(s) inserted`);

    // Query documents
    const documents = await collection.find().toArray();
    console.log('Documents:', documents);

    // Update a document
    const updateResult = await collection.updateOne({ username: 'example' }, { $set: { password: 'newpassword123' } });
    console.log(`${updateResult.modifiedCount} document(s) updated`);

    // Delete a document
    const deleteResult = await collection.deleteOne({ username: 'example' });
    console.log(`${deleteResult.deletedCount} document(s) deleted`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}


connectToDatabase();
const fs = require('fs');
const Papa = require('papaparse');
const mongoose = require('mongoose');

// Define MongoDB schema
const csvSchema = new mongoose.Schema({
  // Define fields based on your CSV structure
  // For simplicity, let's assume CSV has two fields: name and age
  expenseCategory: String,
  currency: String, 
  amount: Number, 
  location: String, 
  date: String,
  time: String
});

// Define MongoDB model
const CsvModel = mongoose.model('Csv', csvSchema);

// Connect to MongoDB
mongoose.connect('mongodb+srv://mrk133:ovlP6h4epIrWyDcq@cluster0.o58ssex.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
 { useNewUrlParser: true, useUnifiedTopology: true });

// Function to save CSV data to MongoDB
function saveCSVToMongo(filename) {
  const fileData = fs.readFileSync(filename, 'utf8');
  Papa.parse(fileData, {
    header: true,
    complete: (results) => {
      const data = results.data;
      CsvModel.insertMany(data, (err, docs) => {
        if (err) {
          console.error('Error saving CSV data to MongoDB:', err);
        } else {
          console.log('CSV data saved successfully:', docs);
        }
      });
    }
  });
}

/* // Usage: Call saveCSVToMongo for each CSV file you want to save
saveCSVToMongo('file1.csv');
saveCSVToMongo('file2.csv');
// Add more calls as needed for additional files */
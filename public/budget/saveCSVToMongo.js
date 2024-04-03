// (Author: Ben & Connor Gramling)
// savesCSVToMango.js saves current budget to mango


// Function to handle exporting data from the Handsontable to CSV
  function exportDataToCSV() {
  const hotInstance = Handsontable.getInstance('handsontable-container');
  const data = hotInstance.getData();
  // Convert data to CSV format
  const csvData = data.map(row => row.join(',')).join('\n');
  return csvData;
}

// Function to save the exported CSV data to MongoDB
function saveCSVToMongoDB(csvData) {
  fetch('/api/saveCSVToMongo', {
      method: 'POST',
      headers: {
          'Content-Type': 'text/csv',
      },
      body: csvData
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          alert('Budget successfully saved to MongoDB.');
      } else {
          alert('Failed to save budget. Please try again.');
      }
  })
  .catch(error => console.error('Error:', error));
}

// Event listener for the "Save Budget" button
document.getElementById('save-budget-btn').addEventListener('click', function() {
  const csvData = exportDataToCSV();
  saveCSVToMongoDB(csvData);
});





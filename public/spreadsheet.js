/**
 * @author Mark Kraus
 * @author Ben Mullin
 * @author Connor Gramling
 */

function main() {
  
  // Get the container element where spreadsheet will be displayed in
  var container = document.getElementById('handsontable-container');

  var data = [];

  // Options for spreadsheet
  const options ={
    //data:: data,
    rowHeaders: true, // if you want row headers
    colHeaders: ['Expense Category', 'Currency', '$Amount', 'Location', 'Date', 'Time'], // column headers
    colWidths: [150, 150, 150, 150, 150, 150], // Sets specific widths for each column

    // Column settings here
    columns: [

      {
      data: 'expenseCategory', // this should correspond to the property in your data objects
      },

      {
        type: 'dropdown',
        data: 'currency', // this should correspond to the property in your data objects
        source: [
          "USD - United States Dollar",
          "EUR - Euro",
          "GBP - British Pound",
          "JPY - Japanese Yen",
          "CNY - Chinese Yuan",
          "INR - Indian Rupee",
          "AUD - Australian Dollar",
          "CAD - Canadian Dollar",
          "SGD - Singapore Dollar",
          "CHF - Swiss Franc",
          "MYR - Malaysian Ringgit",
          "NZD - New Zealand Dollar",
          "THB - Thai Baht",
          "RUB - Russian Ruble",
          "ZAR - South African Rand",
          "BRL - Brazilian Real",
          "PHP - Philippine Peso",
          "IDR - Indonesian Rupiah",
          "TRY - Turkish Lira",
          "KRW - South Korean Won",
          "MXN - Mexican Peso",
          "NOK - Norwegian Krone",
        ], 
        strict: true, // Set to true if you want to prevent users from entering values not on the list
        allowInvalid: false, // Prevents users from entering invalid values
      },

      {
      data: 'amount', // this should correspond to the property in your data objects
      type: 'numeric',
      },

      {},
      {},
      {},

    ],
    contextMenu: true,
    licenseKey: 'non-commercial-and-evaluation',
    startRows: 5, // Adjust the number of initial rows
    startCols: 6, // Adjust the number of initial columns
  };

  // Initialize the spreadsheet
  var hot = new Handsontable(container, options);

  document.getElementById("save-budget-btn").addEventListener("click", function() {
    saveToCSV(hot);
  });

  /* // Add event listener to the "Add Row" button
  var addRowButton = document.getElementById("add-row-button"); 
  addRowButton.addEventListener("click", function() { 
    hot.alter('insert_row', hot.countRows()); // Insert a row at the end of the table
  });  */

  function saveToCSV() {
    console.log("saveToCSV function triggered");//test line


    var csvContent = "data:text/csv;charset=utf-8,"; 
    var data = hot.getData();
    data.forEach(function(rowArray) {
    var row = rowArray.join(",");
    csvContent += row + "\r\n";
    });
  

  // Remove the first part ('data:text/csv;charset=utf-8,') as it's for data URI scheme
  csvContent = csvContent.replace("data:text/csv;charset=utf-8,", "");

  postCSVData(csvContent); // Call the function to post CSV data to the server.
  }
  
  function postCSVData(csvData) {
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
        console.log('CSV data successfully saved to MongoDB');
        // Add any success notification or redirection you want here.
      } else {
        console.error('Failed to save CSV data to MongoDB');
        // Add error handling notification here.
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Add error handling notification here.
    });
  }

}
  // The DOMContentLoaded event listener should be outside the main function
  document.addEventListener('DOMContentLoaded', main);
//const { dataArray } = require("./index");

function main() {
  
  // Get the container element where spreadsheet will be displayed in
  var container = document.getElementById('handsontable-container');

  // Options for spreadsheet
  const options ={
    rowHeaders: true, // if you want row headers
    colHeaders: ['Expense Category', 'Currency', 'Cost', 'Description'], // column headers
    colWidths: [150, 150, 150, 150, ], // Sets specific widths for each column

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
      data: 'cost', // this should correspond to the property in your data objects
      type: 'numeric',
      },

      {},

    ],
    contextMenu: true,
    licenseKey: 'non-commercial-and-evaluation',
    startRows: 5, // Adjust the number of initial rows
    startCols: 4, // Adjust the number of initial columns
  };

  // Initialize the spreadsheet
  var hot = new Handsontable(container, options);


// Function to check for data in Handsontable cells and update the array
function updateDataArray() {
  // Get the data from the Handsontable instance
  var data = hot.getData();
  
  // Check each cell for data and update the array

  dataArray[1][2] = 'I CHANGED IT';
  data.forEach(function(row) {
    row.forEach(function(cell) {
      if (cell !== null && cell !== undefined && cell !== '') {
        dataArray.push(cell);
      }
    });
  });
}

// Set an interval to periodically check for data and update the array
setInterval(updateDataArray, 1000);
}
  // The DOMContentLoaded event listener should be outside the main function
  document.addEventListener('DOMContentLoaded', main);

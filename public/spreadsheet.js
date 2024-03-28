/**
 * @author Mark Kraus
 * @author Ben Mullin
 * @author Connor Gramling
 */

function main() {
  
  // Get the container element where spreadsheet will be displayed in
  const container = document.getElementById('handsontable-container');

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
  const hot = new Handsontable(container, options);

  // Add event listener to the "Add Row" button
  function addRow(){
    hot.alter('insert_row', hot.countRows()); // Insert a row at the end of the table
  }

}

// Call the main function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', main);
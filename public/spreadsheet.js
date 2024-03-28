/**
 * @author Mark Kraus
 * @author Ben Mullin
 */

function main() {

  // Get the container element where spreadsheet will be displayed in
  const container = document.getElementById('handsontable-container');

  var data = [];

  // Options for spreadsheet
  const options ={

    /* data: data, */
    rowHeaders: true, // if you want row headers
    colHeaders: ['Expense Category', 'Currency', '$Amount', 'Location', 'Date', 'Time'], // column headers
    colWidths: true, //[200, 100, 120, 150, 100, 100], // Sets specific widths for each column
    /* columns: [
      // Column settings here

    ], */
    contextMenu: true,
    licenseKey: 'non-commercial-and-evaluation',
    startRows: 100, // Adjust the number of initial rows
    startCols: 6, // Adjust the number of initial columns
  };

  // Initialize the spreadsheet
  const hot = new Handsontable(container, options);
}

// Call the main function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', main);
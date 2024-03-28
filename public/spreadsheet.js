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
<<<<<<< HEAD

    /* data: data, */
    rowHeaders: true, // if you want row headers
    colHeaders: ['Expense Category', 'Currency', '$Amount', 'Location', 'Date', 'Time'], // column headers
    colWidths: [200, 100, 120, 150, 100, 100], // Sets specific widths for each column
    /* columns: [
      // Column settings here

    ], */
    contextMenu: true,
    licenseKey: 'non-commercial-and-evaluation',
    startRows: 100, // Adjust the number of initial rows
    startCols: 6, // Adjust the number of initial columns
=======
    data: data,
    rowHeaders: true, // if you want row headers
    colHeaders: true, //['Expense Category', 'Currency', '$Amount', 'Location', 'Date', 'Time'], // Column headers
    //colWidths: [2000, 1000, 1200, 1500, 1000, 1000], // Sets specific widths for each column
    // contextMenu: true,
    // licenseKey: 'non-commercial-and-evaluation',
    // startRows: 100, // Number of initial rows
    // startCols: 6, // Number of initial columns
>>>>>>> 4ce96b9d886ba2603f7677a7f3dd9ccd65ed1522
  };

  // Initialize the spreadsheet
  const hot = new Handsontable(container, options);
}

// Call the main function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', main);
/**
 * @author Mark Kraus
 * @author Ben Mullin
 */

// Define the main function
function main() {

  
  // Get the container element
  var container = document.getElementById('handsontable-container');

  // Define data for the spreadsheet
  var data = [];

  // Define options for Handsontable
  var options ={
    data: data,
    rowHeaders: true, // if you want row headers
    colHeaders: ['Expense Category', 'Currency', '$Amount', 'Location', 'Date', 'Time'], // column headers
    columns: [
      // Column settings here
    ],
    contextMenu: true,
    licenseKey: 'non-commercial-and-evaluation',
    startRows: 100, // Adjust the number of initial rows
    startCols: 6, // Adjust the number of initial columns
  };

  // Initialize Handsontable
  const hot = new Handsontable(container, options);

}//end main


// Call the main function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', main);



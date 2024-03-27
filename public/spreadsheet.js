/**
 * @author Mark Kraus
 */

// Define the main function
function main() {
  // Get the container element
  const container = document.getElementById('handsontable-container');

  // Define data for the spreadsheet
  const data = [
    ['', 'Ford', 'Volvo', 'Toyota', 'Honda'],
    ['2019', 10, 11, 12, 13],
    ['2020', 20, 11, 14, 13],
    ['2021', 30, 15, 12, 13]
  ];

  // Define options for Handsontable
  const options = {
    data: data,
    rowHeaders: true,
    colHeaders: true,
    contextMenu: true,
    licenseKey: 'non-commercial-and-evaluation'
  };

  // Initialize Handsontable
  const hot = new Handsontable(container, options);
}

// Call the main function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', main);

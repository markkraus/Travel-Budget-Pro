function main() {
  
  // Get the container element where spreadsheet will be displayed in
  var container = document.getElementById('handsontable-container');
  var save = document.getElementById('save');
  var load = document.getElementById('load');

  // Init table to show up in createBudget.ejs
  const hot = new Handsontable(container, {
    startRows: 8,
    startCols: 5,
    rowHeaders: true, // if you want row headers
    colHeaders: ['Expense Category', 'Currency', 'Cost', 'Description'], // column headers
    colWidths: [150, 150, 150, 150,], // Sets specific widths for each column
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation',
    columns: [
      // Expense Category settings
      {
        data: 'expenseCategory',
        type: 'dropdown',
        source: [
          "",
          "Food",
          "Transportation",
          "Entertainment",
          "Lodging",
        ],
        strict: false,
      },
      // Currency settings
      {
        data: 'Currency',
        type: 'dropdown',
        source: [
          "",
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
        strict: true, // Prevents users from entering values not on the list
        allowInvalid: false, // Prevents users from entering invalid values
      },
      // Cost settings
      {
        data: 'cost',
        type: 'numeric',
      },
      // Description settings
      {}
    ]
  });
}
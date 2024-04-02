// author Ben Mullin
// file for scripts between front end clicks and back end 

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('save-budget-btn').addEventListener('click', function(){
    // Assuming `getBudgetData` is a function that collects all budget data from your form/spreadsheet
    const budgetData = getBudgetData(); 

    fetch('/save-budget', { // Your server endpoint to handle the budget saving
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify( {data: budgetData} ), // Convert your budget data into a string to send to the server
    })
    .then(response => {
        if(response.ok) {
        return response.json(); // Parse JSON response if successful
        }
        throw new Error('Network response was not ok.'); // Handle server errors or unsuccessful responses
    })
    .then(data => {
        console.log('Success:', data);
        // Here, you can redirect to another page or show a success message
        // e.g., window.location.href = '/success-page';
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors, e.g., show an error message to the user
        });
    });
})

function getBudgetData() {
  // Assuming `hot` is accessible in this scope; if not, you may need to adjust
  return hot.getData().map(row => ({
    expenseCategory: row[0],
    currency: row[1],
    amount: row[2],
    location: row[3],
    date: row[4],
    time: row[5]
  }));
}





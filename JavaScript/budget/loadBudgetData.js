// loadBudgetData.js
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const budgetId = urlParams.get('budgetId');
    
    // Check if the budgetId is present
    if (budgetId) {
      fetch(`/fetch-budget/${budgetId}`) // Fetch the budget data from the server
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          // Assuming `hot` is your Handsontable instance
          hot.loadData(data); // Load the budget data into Handsontable
          // Note: If your data is nested within a property, you may need to adjust the key. For example: data.budgetItems
        })
        .catch(error => {
          console.error('Failed to load budget:', error);
          // Handle loading errors, perhaps show a user-friendly message or logging the error
        });
    }
  });
  
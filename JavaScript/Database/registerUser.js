document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('register-form');

  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    };

    saveData(formData);
    registerForm.reset();
  });

  function saveData(data) {
    // Convert data to JSON
    const jsonData = JSON.stringify(data);

    // Send the JSON data to your server to handle file writing
    // Example using fetch API (you'll need server-side code to handle this)
    fetch('/save-registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to save data');
        }
        console.log('Data saved:', jsonData);
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  }
});

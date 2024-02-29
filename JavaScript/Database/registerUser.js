/**
 * --registerUser.js--
 * @author: Mark Kraus
 * @description: Handles events related to registering a new user
 */

const fs = require('fs'); // Interacts with Node.js file system

/**
 * @description: Allows the user to see/hide their inputted password
 */
function togglePasswordVisibility() {
  // Obtain references to the password box & icon
  const passwordInput = document.getElementById('password');
  const toggleButton = document.getElementById('toggle-password');

  if (passwordInput.type === 'password') {
    // Password is hidden - reveal it
    passwordInput.type = 'text';
    toggleButton.textContent = 'Hide';
  } else {
    // Password is visible - hide it
    passwordInput.type = 'password';
    toggleButton.textContent = 'Show';
  }
}

/**
 * @description: Registers a new user in the system
 * by adding the user's data to a JSON 'database'
 * @param {Object} userData - The user data object
 */
function registerUser(userData) {
  // Retrieve form inputs
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Create user object
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    username: username,
    password: password
  };

  // Convert user object to JSON format
  const payload = JSON.stringify(newUser);

  // Append to the 'database'
  fs.appendFile('users.json', payload + '\n', (err) => {
    if (err) throw err; // Throw the error if there is one
  })
}

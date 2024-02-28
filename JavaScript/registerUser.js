/**
 * --registerUser.js--
 * Author: Mark Kraus
 * Description: Handles events related to registering a new user
 */


/**
 * Allows the user to see/hide their inputted password.
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

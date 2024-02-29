/** -- */

// index.js
const { registerUser } = require('./registerUser');

// Example usage:
const newUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  username: 'johndoe',
  password: 'password123'
};

registerUser(newUser);

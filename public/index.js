/**
 * Handles HTTP requests and responses for the web application.
 * Implements a Node.js server script using the Express.js framework.
 * 
 * Features:
 *  - Express.js middleware for parsing JSON and URL-encoded data.
 *  - Routing for rendering *.ejs pages.
 *  - Password hashing using bcrypt.
 * 
 * Dependencies:
 *  - Express.js
 *  - Bcrypt
 *  - MongoDB
 *  - Express Session
 * 
 * @author: Henry Uz & Mark Kraus
 */

//-------------------------------------------------------------------
//            Configuration
//-------------------------------------------------------------------

// Pulling libraries and dependencies
const express = require('express');
const fs = require('fs');
const paths = require('path' );
const bcrypt = require('bcrypt');
const {users, budgets} = require("./config"); // 'collection' is pulled from config.js
const hot = require('./spreadsheet'); // Import the Handsontable instance

// Create an instance of the Express server
const app = express();

// Convert user input data into JSON format
app.use(express.json());

// Set up middleware to parse user input data
app.use(express.urlencoded({ extended: false }));

// Use EJS to render the UI pages
app.set('view engine', 'ejs');

// Configure Express to send files (HTML, JavaScript, etc.) directly to the client
app.use(express.static('public'));

// Make variables last until users log out
const session = require('express-session');
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Middleware function to retrieve user's first name from session
const retrieveFirstName = (req, res, next) => {
  if (req.session.firstName) {
    // first name exists in the session - make it available in locals
    res.locals.firstName = req.session.firstName;
  }
  next(); // next route handler
};

// Apply to all routes
app.use(retrieveFirstName);

const setError = (errorMessage) => (req, res, next) => {
  res.locals.error = errorMessage;
  next(); // next route handler
};

// Use setError middleware with an initial error message
app.use(setError("")); // Initialize error as empty string

//-------------------------------------------------------------------
//            PORT Configuration
//-------------------------------------------------------------------

//Server host
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
});

/*
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
})
*/


//-------------------------------------------------------------------
//            Route Handlers
//-------------------------------------------------------------------

// Pulls login.ejs file for default site (no extension)
app.get("/", (req, res) => {
  res.render("login");
});

// Pulls login page
app.get("/login", (req, res) => {

  res.render("login");
});

// Pulls registration page
app.get("/registration", (req, res) => {

  res.render("registration");
});

// Pulls home page
app.get("/home", (req, res) => {

  res.render("home");
});

// Pulls settings page
app.get("/settings", (req, res) => {

  res.render("settings");
});

app.get("/createBudget", (req, res) => {
  res.render("createBudget");
});


app.get("/createReport", (req, res) => {

  res.render("createReport");
});



//-------------------------------------------------------------------
//            User Registration
//-------------------------------------------------------------------
app.post("/registration", async (req, res) => {
  const data = {
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }

  // Search database for username
  const existingUser = await users.findOne({ username: data.username })

  if (existingUser) {
    // User selected a username that has already been chosen
    res.send("User already exists. Please choose a different username.");
  } else {
    // Username is valid - hash their passward
    const saltRounts = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounts);
    data.password = hashedPassword;

    // Add them to database
    await users.insertMany(data);

    // Redirect them to the login page
    return res.render("login");
  }
});

//-------------------------------------------------------------------
//                            User Login
//-------------------------------------------------------------------
app.post("/home", async (req, res) => {
  try {
    // Search the database for the username in the username input box
    const check = await users.findOne({ username: req.body.username });
    if (!check) {
      // Username does not exist - indicate to the user
      return res.render("login", { error: "Username does not exist" });
    }

    // Username exists - check passward in password input box
    const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
    if (isPasswordMatch) {
      // Correct password - redirect to dashboard

      // Store first name and username for entire session
      req.session.firstName = check.firstname;
      req.session.username = check.username;

      // Pass in first name to dynamically greet the user
      return res.render("home", { firstName: check.firstname });
    } else {
      // Incorrect passward - indicate to the user
      return res.render("login", { error: "Wrong password" });
    }
  } catch (error) {
    // Login credentials do not exist
    return res.render("login", { error: "Wrong details" });
  }
});

//-------------------------------------------------------------------
//           Save a budget
//-------------------------------------------------------------------
app.post("/createBudget", async (req, res) => {
  try {
    const user = req.session.username;

    // Deserialize the budget data from the hidden input field
    const budgetData = JSON.parse(req.body.budgetData);

    // Create a new object to store the spreadsheet data
    const budgetObject = {
      username: user,
      expenseCategory: budgetData.expenseCategory,
      currency: budgetData.currency,
      cost: budgetData.cost,
      description: budgetData.description
    };

    // Save to the 'budgets' collection
    await budgets.insertMany(budgetObject);

  } catch (error) {
    // Handle errors
    console.error("Error saving budget data:", error);
    res.status(500).send("Internal server error");
  }
});

//-------------------------------------------------------------------
//           Load a budget
//-------------------------------------------------------------------
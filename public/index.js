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
const {collection, collection1} = require("./config"); // 'collection' is pulled from config.js

let dataArray = [
  ['Expense Category', 'Description', 'Currency', 'Cost'],
  ['DIDNT', 'WORK', 'USD', '50'],
  ['DIDNT', 'WORK', 'USD', '50'],
  ['DIDNT', 'WORK', 'USD', '50']
];
//const dataArray = require('./spreadsheet');
//const budgetFileFunction = require('./spreadsheet');
//const budgetdata = require("./spreadsheet");


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
  const existingUser = await collection.findOne({ username: data.username })

  if (existingUser) {
    // User selected a username that has already been chosen
    res.send("User already exists. Please choose a different username.");
  } else {
    // Username is valid - hash their passward
    const saltRounts = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounts);
    data.password = hashedPassword;

    // Add them to database
    const userdata = await collection.insertMany(data);
    console.log(userdata);

    // Redirect them to the login page
    return res.render("login");
  }
})

//-------------------------------------------------------------------
//                            User Login
//-------------------------------------------------------------------
app.post("/home", async (req, res) => {
  try {
    // Search the database for a username
    const check = await collection.findOne({ username: req.body.username });
    if (!check) {
      // Username does not exist - indicate to the user
      return res.render("login", { error: "Username does not exist" });
    }

    // Username exists - check passward
    const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
    if (isPasswordMatch) {
      // Correct password - redirect to dashboard
      const firstName = check.firstname;

      // Store the user's first name for the entire session
      req.session.firstName = firstName;

      return res.render("home", { firstName: check.firstname});
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
//            Budget Creation
//-------------------------------------------------------------------

app.post("/createBudget", async (req, res) => {
  const data = {
    username: "JOE ROGA",
    category: dataArray[1][0],
    description: dataArray[1][1],
    currency: dataArray[1][2],
    cost: dataArray[1][3]
  }

    // Add them to database
    const budget = await collection1.insertMany(data);
    console.log(budget);

    // Redirect them to the login page
    return res.render("createBudget");
})

module.exports = {
  dataArray: dataArray
};
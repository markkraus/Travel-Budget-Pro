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
 * 
 * Author: Henry Uz & Mark Kraus
 */

//-------------------------------------------------------------------
//            Configuration
//-------------------------------------------------------------------

// Pulling libraries and dependencies
const express = require('express');
const paths = require("path");
const bcrypt = require('bcrypt');
const collection = require("./config"); // 'collection' is pulled from config.js

// Create an instance of the Express server
const app = express();

// Convert user input data into JSON format
app.use(express.json());

// Set up middleware to parse user input data
app.use(express.urlencoded({extended: false}));

// Use EJS to render the UI pages
app.set('view engine', 'ejs');

// Configure Express to send files (HTML, JavaScript, etc.) directly to the client
app.use(express.static("public"));

//-------------------------------------------------------------------
//            PORT Configuration
//-------------------------------------------------------------------

// Server host
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
});

// Local host
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
    // Generate a random number between 1 and 22
    var randomNumber = Math.floor(Math.random() * 22) + 1;
  
    // Construct the image URL based on the random number
    var imageUrl = 'cities/' + randomNumber + '.jpg';
  
    // Set the background image of the body
    document.body.style.backgroundImage = 'url("' + imageUrl + '")';
    document.body.style.backgroundSize = 'cover'; // Adjust background size to cover the entire viewport
    document.body.style.backgroundRepeat = 'no-repeat'; // Ensure background image is not repeated

});

// Pulls login page
app.get("/login", (req, res) => {

    res.render("login");
});

// Pulls registration page
app.get("/registration", (req, res) => {

    res.render("registration");
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
  const existingUser = await collection.findOne({username: data.username })

  if(existingUser) {
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
app.post("/login", async (req, res) => {
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
            return res.render("mainPage");
        } else {
            // Incorrect passward - indicate to the user
            return res.render("login", { error: "Wrong password" });
        }
    } catch (error) {
        // Login credentials do not exist
        return res.render("login", { error: "Wrong details" });
    }
});

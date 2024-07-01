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
const path = require('path');
const bcrypt = require('bcrypt');
const { users, budgets } = require("./config"); // Adjusted path to config.js

// Create an instance of the Express server
const app = express();

// Convert user input data into JSON format
app.use(express.json());

// Set up middleware to parse user input data
app.use(express.urlencoded({ extended: false }));

// Set the views directory and view engine
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');

// Configure Express to send static files (HTML, JavaScript, etc.) directly to the client
app.use(express.static(path.join(__dirname)));

// Make variables last until users log out
const session = require('express-session');
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Middleware function to retrieve user's first name from session
const retrieveAttributes = (req, res, next) => {
  if (req.session.firstName) {
    res.locals.firstName = req.session.firstName;
    res.locals.budgets = req.session.budgets;
  }
  next(); // next route handler
};

app.use(retrieveAttributes);

const setError = (errorMessage) => (req, res, next) => {
  res.locals.error = errorMessage;
  next(); // next route handler
};

// Use setError middleware with an initial error message
app.use(setError("")); // Initialize error as empty string

//-------------------------------------------------------------------
//            PORT Configuration
//-------------------------------------------------------------------

app.listen(process.env.PORT || 3000, () => {
  try {
    console.log('Server is running on port 3000');
  } catch (error) {
    console.error('Server failed to start', error);
  }
});

//-------------------------------------------------------------------
//            Route Handlers
//-------------------------------------------------------------------

// Example of a route
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
  res.render("createBudget", { budgetData: null });
});

//-------------------------------------------------------------------
//        Deletes budget and returns to home page
//-------------------------------------------------------------------
app.post("/deleteBudget", async (req, res) => {
  const user = req.session.username;
  const budgetID = req.body.budgetID1;

  try {
      const existingBudget = await budgets.findOne({ _id: budgetID });
      if (existingBudget) {
          // If the budget exists, delete it
          const result = await budgets.deleteOne({ _id: budgetID });
          console.log(`${result.deletedCount} budget(s) deleted.`);
      } 
      // Update the session by filtering out the deleted budget
      if (req.session.budgets && Array.isArray(req.session.budgets)) {
        req.session.budgets = req.session.budgets.filter(budget => budget._id.toString() !== budgetID);
      }

      res.redirect("/home");  // Redirect to the home page 
  } catch (error) {
      console.error("Error in deleting budget:", error);
      res.status(500).send("Error deleting budget");
  }
});

//-------------------------------------------------------------------
// Loads budget data on create budget page when button is clicked
//-------------------------------------------------------------------
app.get('/budget', async (req, res) => {
  const budgetId = req.query.id;

  try {
    // Assuming Budget is your model and budgetId is coming correctly formatted
    const budgetData = await budgets.findById(budgetId);
    if (!budgetData) {
      res.status(404).send('Budget not found');
      return;
    }
    // Print the retrieved budget data to the console for debugging
    console.log('Retrieved budget data:', budgetData);
    res.render("createBudget", { budgetData: budgetData });

} catch (error) {
  console.error('Database error:', error);
  res.status(500).send('Error retrieving budget');
}

});  

//-------------------------------------------------------------------
// Loads report data on view report page when button is clicked
//-------------------------------------------------------------------
app.get('/report', async (req, res) => {
  const budgetId = req.query.id;
  const graphType = req.query.graphType;

  try {
    // Assuming Budget is your model and budgetId is coming correctly formatted
    const budgetData = await budgets.findById(budgetId);
    if (!budgetData) {
      res.status(404).send('Budget not found');
      return;
    }
    // Print the retrieved budget data to the console for debugging
    console.log('Retrieved budget data:', budgetData);
    res.render("viewReport", { budgetData: budgetData, graphType: graphType });
} catch (error) {
  console.error('Database error:', error);
  res.status(500).send('Error retrieving budget');
}

});  

app.get("/selectReport", (req, res) => {
  res.render("selectReport");
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
  // Search the database for the username in the username input box
  const check = await users.findOne({ username: req.body.username });
  if (!check) {
    // Username does not exist - indicate to the user
    return res.render("login", { error: "Username does not exist" });
  }

  // Username exists - check password in password input box
  const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
  if (isPasswordMatch) {
    // Correct password - redirect to dashboard

    // Store first name and username for the entire session
    req.session.firstName = check.firstname;
    req.session.username = check.username;

    // Query the database to find budgets associated with the logged-in user
    const userBudgetsCursor = await budgets.find({ username: check.username });

    try {
      // Check if any budgets were found
      if (userBudgetsCursor.length === 0) {
        // No budgets found
        req.session.budgets = [];
      } else {
        // Convert cursor to array of budgets
        req.session.budgets = userBudgetsCursor;
      }

      // Pass the budgets to the home template for rendering
      return res.render("home", { firstName: req.session.firstName, budgets: req.session.budgets });
    } catch (error) {
      console.error("Error iterating over cursor:", error);
      return res.status(500).send("Internal server error");
    }
  } else {
    // Incorrect password - indicate to the user
    return res.render("login", { error: "Wrong password" });
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
    const budgetID = req.body.budgetID;

    // Create a new object to store the spreadsheet data
    const budgetObject = {
      username: user,
      budgetName: budgetData.budgetName,
      expenseCategory: budgetData.expenseCategory,
      currency: budgetData.currency,
      cost: budgetData.cost,
      description: budgetData.description,
      selectedCurrency: budgetData.selectedCurrency,
      maximumBudget: budgetData.maximumBudget,
      foodMax: budgetData.foodMax,
      transportationMax: budgetData.transportationMax,
      entertainmentMax: budgetData.entertainmentMax,
      lodgingMax: budgetData.lodgingMax
    };

    console.log('Saved budget data:', budgetData);

    //Search for existing budget
    const existingBudget = await budgets.findOne({
      _id: budgetID,
    });

    if (existingBudget) {
      // Update the existing budget
      await budgets.updateOne(
        { _id: existingBudget._id }, 
        { $set: budgetObject }
      );
      //Update session budgets to reflect changed budget
      const index = req.session.budgets.findIndex(b => b._id.toString() === existingBudget._id.toString());
      if (index !== -1) {
          req.session.budgets[index] = {...req.session.budgets[index], ...budgetObject};
      }
    } else {
      // Save to the 'budgets' collection & session budgets
      const newBudget = await budgets.insertMany(budgetObject);
      req.session.budgets = req.session.budgets.concat(newBudget);
    }

    res.redirect("/home");
  } catch (error) {
    // Handle errors
    console.error("Error saving budget data:", error);
    res.status(500).send("Internal server error");
  }
});

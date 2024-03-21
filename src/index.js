// Pulling libraries and dependencies
const express = require('express');
const paths = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");

//  Creating an instance of the Express server
const app = express();

// 
app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.use(express.static("public"));

// Pulls html/ejs file for default site (no extension)
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


// User get added to MongoDB database
app.post("/registration", async (req, res) => {
    const data = {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    const userdata = await collection.insertMany(data); // Call to add the user
    console.log(userdata);
})

// Website is being hosted either on localhost or server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
})
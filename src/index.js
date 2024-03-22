// Pulling libraries and dependencies
const express = require('express');
const paths = require("path");
const bcrypt = require('bcrypt');
const collection = require("./config");

//  Creating an instance of the Express server
const app = express();

// convert data into json format
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

//-------------------------------------------------------------------
//            User gets added to MongoDB database
//-------------------------------------------------------------------
app.post("/registration", async (req, res) => {
    const data = {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }
    //search database for username
    const existingUser = await collection.findOne({username: data.username })

    if(existingUser){
        res.send("User already exists. Please choose a different username.");
    }else{
        //Hash password 
        const saltRounts = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounts);
        data.password = hashedPassword;
        
        //Add user info to database
        const userdata = await collection.insertMany(data);
        console.log(userdata);
        return res.render("login");
    }
})
//-------------------------------------------------------------------
//-------------------------------------------------------------------


//-------------------------------------------------------------------
//                            User Login
//-------------------------------------------------------------------

app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ username: req.body.username });
        if (!check) {
            // Display error modal for username not found
            return res.render("login", { error: "Username does not exist" });
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (isPasswordMatch) {
        //if (req.body.password == check.password) {
            // Load main page
            return res.render("mainPage");
        } else {
            // Display error modal for wrong password
            return res.render("login", { error: "Wrong password" });
        }
    } catch (error) {
        // Display error modal for wrong details
        return res.render("login", { error: "Wrong details" });
    }
});

//-------------------------------------------------------------------
//-------------------------------------------------------------------

/* Website is being hosted either on localhost or server
app.listen( process.env.PORT || 3000, () => {
    console.log('Server is running...');
});
//*/


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
})

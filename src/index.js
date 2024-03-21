const express = require('express');
const paths = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.use(express.static("public"));

//Pulls html/ejs file for default site (no extension)

app.get("/", (req, res) => {

    res.render("login");
});

app.get("/login", (req, res) => {

    res.render("login");
});

app.get("/registration", (req, res) => {

    res.render("registration");
});


//Register user

app.post("/registration", async (req, res) => {
    const data = {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    const userdata = await collection.insertMany(data);
    console.log(userdata);
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
})
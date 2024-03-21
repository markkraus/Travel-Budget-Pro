const express = require('express');
const path = require('path');
const collection = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set the directory where HTML files are located
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get("/registration", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'registration.html'));
});

// Register user
app.post("/registration", async (req, res) => {
    const data = {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    };

    const userdata = await collection.insertMany(data);
    console.log(userdata);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
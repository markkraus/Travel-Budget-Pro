const express = require('express');
const app = express();
const routes = require('./routes'); // Adjust path as necessary

app.use(express.json()); // For parsing JSON bodies in requests
app.use('/', routes); // Mount the routes

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const express = require('express') // Express.js
const { connectToDb, getDb} = require('./db') // Connecting MongoDB functionality

// Init app & middleware
const app = express()

// Connect to the database
let db
connectToDb((err) => {
  if (!err) {
    // Connection was successful
    app.listen(3000, () => {
      console.log("app listening on port 3000")
    })
    db = getDb()
  }
})

// Routes
app.get('/users', (req, res) => {
  res.json({mssg: "received"})
})

// Task bar
document.getElementById('toggle-button').addEventListener('click', function () {
  document.getElementById('taskbar').classList.toggle('collapsed');
});
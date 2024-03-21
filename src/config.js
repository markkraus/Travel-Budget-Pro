const mongoose = require("mongoose");

// URI to connect to the MongoDB database      <username>  <password>
const connect = mongoose.connect("mongodb+srv://heu5:AgDsYabct7p56ksI@cluster0.o58ssex.mongodb.net/logindata");

connect.then(() => {
  // Connection was successful
  console.log("it worked");
})
.catch(() =>{
  // Connection was unsuccessful
  console.log("it didnt worked");
})

// Blueprint for expected user input data to be pulled from the registration page
const LoginSchema = new mongoose.Schema({

    firstname: {
    type: String, 
    required: true
    },

    lastname: {
    type: String, 
    required: true
    },

    email: {
    type: String, 
    required: true
    },

    username: {
    type: String, 
    required: true
    },
    password: {
    type: String,
    required: true
    }

});

const collection = new mongoose.model("registeredusers", LoginSchema);

module.exports = collection;


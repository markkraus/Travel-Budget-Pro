const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://heu5:AgDsYabct7p56ksI@cluster0.o58ssex.mongodb.net/logindata");

connect.then(() => {
    console.log("it worked");
})
.catch(() =>{
    console.log("it didnt worked");
})

const LoginSchema = new mongoose.Schema({

    name: {
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


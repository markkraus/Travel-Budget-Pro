/* Adds a user who registers to the 'logindata.registeredusers' collections */


db.registeredusers.insertOne({
  name: firstName + lastName,
  email: email,
  username: username,
  password: password
});




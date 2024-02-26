/* MongoDB functionality */

const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
  /* Connects to the database */
  connectToDb: (cb) => {
    MongoClient.connect('mongodb://localhost:27017/TravelBudgetPro')
      .then((client) =>{
        dbConnection = client.db()
        return cb()
      })
      .catch(err => {
        // Return an error if something went wrong
        console.log(err)
        return cb(err)
      })
  },
  
  /* Returns the connection from the database */
  getDb: () => dbConnection
}
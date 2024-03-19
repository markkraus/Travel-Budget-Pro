
/*         --main.js-- 
 * 
 * The driver of Travel Budget Pro. 
 * 
 */

//<<<<<<< HEAD
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

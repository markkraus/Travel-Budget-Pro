
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

// Task bar
document.getElementById('toggle-button').addEventListener('click', function () {
  document.getElementById('taskbar').classList.toggle('collapsed');
});
//=======
//>>>>>>> 2860af7bea0b46d87397e899542bb7b834d1792a

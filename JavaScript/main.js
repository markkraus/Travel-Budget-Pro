
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

// Task bar collapse
document.getElementById('toggle-button').addEventListener('click', () => {
  console.log("clicked");
  const taskbar = document.getElementById('taskbar');
  taskbar.classList.toggle('compressed');
});

//Task bar buttons
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    // Add your desired functionality here
  });
});

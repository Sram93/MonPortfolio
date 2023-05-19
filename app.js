const express = require('express')
const app = express()

// EJS
app.set ('index', './') 
app.set ('view engine', 'ejs')
app.get ('/', (reg, res) => {
    res.render ('home')
})


app.listen (3000, () => console.log ( 'Server started (http: // localhost: 3000 /)') )
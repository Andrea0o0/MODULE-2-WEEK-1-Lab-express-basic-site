const express = require('express')
const app = express()

//MAKE FOLDER PUBLIC AVAILABLE
app.use(express.static('public'))

//HOME ROUTE
app.get('/home',(request,response) => response.send('<h1>Welcome /home :)</h1>'))

//ABOUT ROUTE
app.get('/about',(request,response) => response.send('<h1>Welcome /about :)</h1>'))

//CONTACT ROUTE
app.get('/contact',(request,response) => response.send('<h1>Welcome /contact :)</h1>'))

//SERVER STARTED
app.listen(3000,() => console.log('My first app listening on port 3000!'))


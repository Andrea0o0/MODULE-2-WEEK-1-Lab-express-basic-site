const express = require('express')
const app = express()

//MAKE FOLDER PUBLIC AVAILABLE
app.use(express.static('public'))
//HBS
app.set('view engine','hbs')
//VIEWS HBS
app.set('views',__dirname + '/views')
//LAYOUT
// hbs.registerPartials(__dirname + '/views/partials')

//HOME ROUTE
app.get('/',(request,response) => response.status(200).render('home'))

//ABOUT ROUTE
app.get('/about',(request,response) => response.status(200).render('about'))

//WORKS ROUTE
app.get('/works',(request,response) => response.status(200).render('works'))

//A PHOTO GALLERY ROUTE
app.get('/photo-gallery',(request,response) => response.status(200).render('photo_gallery'))

//SERVER STARTED
app.listen(3000,() => console.log('My first app listening on port 3000!'))



// Dependencies
const express = require('express')
const employeeRoutes = require('./routes/employeeRoutes')

// Instantiations
const app = express()

//Configurations
app.set('view engine', 'pug');
app.set('views', './views');

//middleware
app.use(express.urlencoded({extended: true}))
/
//custom middleware
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
    next();  
 });
 
// middleware for serving static files(css,js,images)
 app.use(express.static('public'));

// Routes

// app.get('/createEmployee', (req, res) => {
//     res.render('createEmployee', { title: 'Add Employee' })
// })

app.use('/employee', employeeRoutes);

// cater for undefined routes
app.get('*', (req, res)=> {
    res.send('The route specified doesnt exist')
})
  
//Server 
app.listen(3003, () => console.log('listening on port 3003'));

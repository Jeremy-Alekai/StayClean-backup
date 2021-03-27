// Dependencies
const express = require('express')
const employeeRoutes = require('./routes/employeeRoutes');
const driverInterface = require('./routes/driverInterface');
const smoothLogin = require('./routes/smoothLogin');
const contactUs = require('./routes/contactUs');
const pickupZones = require('./routes/pickupZones');
const dashBoard = require('./routes/dashBoard');
const dashLanding = require('./routes/dashLanding');
const driverReg = require('./routes/driverReg');

// Instantiations
const app = express()

//Configurations
app.set('view engine', 'pug');
app.set('views', './views');

//middleware
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
    next();
});

// middleware for serving static files(css,js,images)
app.use(express.static('public'));

// Routes
app.use('/addemployee', employeeRoutes)
app.use('/driverinterface', driverInterface)
app.use('/login', smoothLogin)
app.use('/contactus', contactUs)
app.use('/pickupzones', pickupZones)
app.use('/dashboard', dashBoard)
app.use('/dashlanding', dashLanding)
app.use('/adminreg', driverReg)


// const employeeRoutes = require('./routes/employeeRoutes')
// app.use('/employee', employeeRoutes)
// app.get('/login', (req, res) => {
//     res.render('smooth-login');
// })
// app.get('/pickup-zones', (req, res) => {
//     res.render('pickup-zones');
// })

app.post('/createmployee', (req, res) => {
    console.log(req.body)
    res.send("Data successfully captured")
})

app.get('*', (req, res) => {
    res.send('The route specified doesnt exist')
})

//Server 
app.listen(3000, () => console.log('listening on port 3000'));
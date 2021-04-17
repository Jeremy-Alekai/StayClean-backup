// Dependencies
const express = require('express');
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
});

//require dotenv
require('dotenv').config();

//require mongoose
const mongoose = require('mongoose');

//Require other user routes
const adminHome = require('./routes/home');
const employeeReg = require('./routes/employeeReg');
const clientRegList = require('./routes/clientReg');
const saleReport = require('./routes/report');


// Instantiations
const app = express()

//setting up the db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

//Configurations
app.set('view engine', 'pug');
app.set('views', './views');

//middleware
app.use(express.urlencoded({ extended: true }))

//custom middleware
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
    next();
});

// middleware for serving static files(css,js,images)
app.use(express.static('public'));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));

// Usage of the created Routes
app.use('/home', adminHome)
app.use('/employeeReg', employeeReg)
app.use('/clientReg', clientRegList)
app.use('/salesReport', saleReport)


//app.post('/employeeReg', (req, res) => {
//         console.log(req.body)
//         res.send("Data successfully captured")
//     })
//cater for undefined routes
app.get('*', (req, res) => {
    res.send('The route specified doesnt exist')
})

//Server 
app.listen(3000, () => console.log('listening on port 3000'));
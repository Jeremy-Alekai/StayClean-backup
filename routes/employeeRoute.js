const express = require('express');
const multer = require('multer');
const router = express.Router();
const Employee = require('../models/Employee')

//get and show the createEmployee.pug file
router.get('/employee', (req, res) => {
    res.render('employeeReg')
})

// image upload
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage })

//var upload = multer({ storage: storage })

// save data from the employeeReg pug file
router.post('/employee', upload.single('image'), async(req, res) => {
    try {
        const employee = new Employee(req.body);
        employee.image = req.file.path;
        await employee.save()
        res.redirect('/employee')
    } catch (err) {
        console.log(err);
        res.send('Sorry! Something went wrong.');
    }
})

// show Employee data from database on the employeelist pug file

module.exports = router;
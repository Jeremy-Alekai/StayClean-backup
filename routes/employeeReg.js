const express = require('express');
const Employee = require('../models/Employee');

const router = express.Router();

router.post('/', async(req, res) => {
    try {

        const employee = new Employee(req.body);
        await employee.save();
        res.render('employeereg');

    } catch (err) {
        console.log(err);
    }
});
//Show truck data from database on the trucklist pug file
router.get('/', async(req, res) => {
    try {
        // Find all the data in the Truck collection.

        const employeeregDetails = await Employee.find();
        console.log(employeeregDetails);

        res.render('employeereg', { users: employeeregDetails, title: 'employee List' })
    } catch (err) {
        res.send('Failed to retrive details');
    }
})


module.exports = router;
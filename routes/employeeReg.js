const express = require('express');
const Employee = require('../models/Employee');

const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('driver');
// })
// 
router.get('/', (req, res) => {
    res.render('employeeReg');
})

router.post('/', async(req, res) => {
    try {
        console.log(req.body)
        const employee = new Employee(req.body);

        await employee.save()
        res.redirect('/employeeReg')
    } catch (err) {
        console.log(err);
        res.send('oops something went wrong')
    }

})

// console.log("form submitted");
// console.log(req.body);
// res.render('employeeReg');

// const employeeRegister = new employeeRegister({
//     username: req.body.username,

//     truckno: req.body.truckno,

//     employeename: req.body.employeename,

//     role: req.body.role,

//     telnumber: req.body.telnumber,

//     residence: req.body.telnumber,
//     gender: req.body.gender,
// });
// try {
//     const savedemployeeReg = await employeeRegister.save();
//     res.json(savedemployeeReg);
// } catch (err) {
//     res.json({ message: err });
// }


module.exports = router;
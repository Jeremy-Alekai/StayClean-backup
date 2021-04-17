const express = require('express');
const employeeReg = require('../models/employeeSchema');

const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('driver');
// })

router.get('/', (req, res) => {
    res.render('employeeReg');
})

router.post('/', async(req, res) => {
    console.log("form submitted");
    console.log(req.body.telnumber);
    res.render('employeeReg');
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
});

module.exports = router;
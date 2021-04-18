const express = require('express');
// const employeeReg = require('../models/employeeSchema');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('employeereg');
});

router.post('/', async(req, res) => {
    console.log('form submitted');
    console.log(req.body);
    res.render('employeereg');
});

module.exports = router;
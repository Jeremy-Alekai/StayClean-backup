//require mongoose
const mongoose = require('mongoose');

//create a schema for the data you need to save
const employeeSchema = new mongoose.Schema({

    username: {
        type: String,
        // required: 'Please Enter username'
    },

    truckno: {
        type: String,
        // required: 'Please Enter username'
    },

    employeename: {
        type: String,
        // required: 'Please Enter employee name'
    },
    gender: {
        type: String,
    },
    role: {
        type: String,
        trim: true
    },
    age: {
        type: String,
        // required: 'Please Enter username'
    },
    telnumber: {
        type: String,
        // required: 'Please Enter username'
    },
    nin: {
        type: String,
        // required: 'Please Enter username'
    },
    driverLicense: {
        type: String,
        // required: 'Please Enter username'
    },
    policeletter: {
        type: String,
        // required: 'Please Enter username'
    },

    residence: {
        type: String,
        // required: 'Please Enter username'
    },


    imageupload: {
        type: String,
    },

})

//export the mongoose model
module.exports = mongoose.model('Employee', employeeSchema);
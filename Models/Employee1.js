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

    role: {
        type: String,
        trim: true
    },

    telnumber: {
        type: String,
        // required: 'Please Enter username'
    },

    residence: {
        type: String,
        // required: 'Please Enter username'
    },

    gender: {
        type: String,
    },
    imageupload: {
        type: String,
    },

})

//export the mongoose model
module.exports = mongoose.model('Employee', employeeSchema);
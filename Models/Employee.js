// Requiring mongoose.
const mongoose = require('mongoose');
// Create a schema for data that is needed to be saved.
const employeeSchema = new mongoose.Schema({
        firstname: {
            type: String,

        },
        lastname: {
            type: String,

        },
        nin: {
            type: String,
            unique: true,
        },
        gender: {
            type: String
        },
        age: {
            type: String,

        },
        date: {
            type: String,

        },
        telephoneNo: {
            type: String,
        },
        userName: {
            type: String,
        },
        password: {
            type: String,

        },
        image: {
            type: String,
        },



    })
    // Export mongoose model.
module.exports = mongoose.model('Employee', employeeSchema)
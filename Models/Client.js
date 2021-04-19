//require mongoose
const mongoose = require('mongoose');

//create a schema for the data you need to save
const clientSchema = new mongoose.Schema({

    clientname: {
        type: String,
        // required: 'Please Enter username'
    },

    typeofclient: {
        type: String,
        // required: 'Please Enter username'
    },

    typeofrequest: {
        type: String,
        // required: 'Please Enter employee name'
    },

    timeofrequest: {
        type: String,
        // required: 'Please Enter username'
    },
    trucksneeded: {
        type: String,
        // required: 'Please Enter username'
    },
    location: {
        type: String,
        // required: 'Please Enter username'
    },
    nin: {
        type: String,
        // required: 'Please Enter username'
    },
    telnumber: {
        type: String,
        // required: 'Please Enter username'
    },

})

//export the mongoose model
module.exports = mongoose.model('Client', clientSchema);
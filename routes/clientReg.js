const express = require('express')
const Client = require('../models/Client');


const router = express.Router();

router.post('/', async(req, res) => {
    try {

        const client = new Client(req.body);
        await client.save();
        res.render('clientRegList');

    } catch (err) {
        console.log(err);
    }
});
// res.render('clientRegList', { title: 'Client Registration' });
router.get('/', async(req, res) => {
    try {
        // Find all the data in the Truck collection.

        const clientList = await Client.find();
        console.log(clientList);

        res.render('clientRegList', { users: clientList, title: 'Client List' })
    } catch (err) {
        res.send('Failed to retrive details');
    }
})

module.exports = router;
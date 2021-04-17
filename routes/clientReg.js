const express = require('express')

const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('driver');
// })

router.get('/', (req, res) => {
    res.render('clientRegList', { title: 'Client Registration' });
})

router.post('/', (req, res) => {
    res.render('clientRegList', { title: 'Client Registration' });
})

module.exports = router;
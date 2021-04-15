const express = require('express')

const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('driver');
// })

router.get('/', (req, res) => {
    res.render('adminHome', { title: 'Home' });
})

router.post('/', (req, res) => {
    res.render('adminHome', { title: 'StayClean Employee Registration' });
})

module.exports = router;
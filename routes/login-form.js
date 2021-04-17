const express = require('express')

const router = express.Router();
// router.get('/', (req, res) => {
//     res.send('driver');
// })

router.get('/', (req, res) => {
    res.render('loginForm', { title: 'Login' });
})

router.post('/', (req, res) => {
    res.render('loginForm', { title: 'Login' });
})

module.exports = router;